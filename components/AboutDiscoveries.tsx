"use client";

import { useEffect, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";
import styles from "./AboutDiscoveries.module.css";

const FACTS = [
  { id: "building", label: "BUILDING", value: "Products · experiments · interfaces", notes: ["TickerKin", "WickLink", "WITROOM", "RPS", "SignalPilot"] },
  { id: "writing", label: "WRITING", value: "Technology · markets · Web3", notes: ["Markets / culture", "AI / process", "Arbitrum’s fraud proofs"] },
  { id: "across", label: "ACROSS", value: "Strategy · technical writing · community · UX", notes: ["strategy", "technical writing", "community", "UX"] },
  { id: "tools", label: "BUILDING WITH", value: "TypeScript · React · Next.js · Python", notes: ["TypeScript", "React", "Next.js", "Python"] },
];

export function AboutIndex() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);

  return (
    <div>
      <div className={styles.indexHeading}>
        <span>FACTUAL INDEX &bull; PROFILE</span>
        <span className={styles.invitation}>Explore the margins ↗</span>
      </div>
      <div className={styles.rows}>
        {FACTS.map((fact) => {
          const open = hovered === fact.id || focused === fact.id || pinned === fact.id;
          return (
            <div key={fact.id} className={`${styles.row} ${styles[fact.id] || ""}`} data-open={open}
              onPointerEnter={(event) => {
                if (event.pointerType !== "touch" && window.matchMedia("(hover: hover)").matches) setHovered(fact.id);
              }} onPointerLeave={() => setHovered(null)}>
              <button type="button" className={styles.rowButton}
                aria-expanded={open} aria-controls={`about-${fact.id}-notes`}
                onFocus={() => setFocused(fact.id)} onBlur={() => setFocused(null)}
                onClick={() => {
                  setPinned(pinned === fact.id ? null : fact.id);
                  setFocused(null);
                  setHovered(null);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setPinned(null);
                    setFocused(null);
                    setHovered(null);
                  }
                }}>
                <span className={styles.label}>{fact.label}</span>
                <span className={styles.value}>{fact.value}</span>
              </button>
              <div id={`about-${fact.id}-notes`} className={styles.margins} aria-hidden={!open}>
                {fact.notes.map((note, index) => (
                  <span key={note} style={{ "--order": index } as React.CSSProperties}>{note}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function DeskNote() {
  const area = useRef<HTMLDivElement>(null);
  const paper = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: number; x: number; y: number; originX: number; originY: number } | null>(null);
  const didMove = useRef(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [grabbed, setGrabbed] = useState(false);

  useEffect(() => {
    if (!area.current) return;
    const observer = new ResizeObserver(() => {
      drag.current = null;
      setGrabbed(false);
      setPosition({ x: 0, y: 0 });
    });
    observer.observe(area.current);
    return () => observer.disconnect();
  }, []);

  function constrain(x: number, y: number) {
    if (!area.current || !paper.current) return { x: 0, y: 0 };
    return {
      x: Math.max(-10, Math.min(x, area.current.clientWidth - paper.current.offsetWidth - 44)),
      y: Math.max(-10, Math.min(y, area.current.clientHeight - paper.current.offsetHeight - 44)),
    };
  }

  function start(event: PointerEvent<HTMLButtonElement>) {
    if (event.button !== 0 || event.pointerType === "touch" || !window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    didMove.current = false;
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, originX: position.x, originY: position.y };
    setGrabbed(true);
  }

  function move(event: PointerEvent<HTMLButtonElement>) {
    const current = drag.current;
    if (!current || current.id !== event.pointerId) return;
    if (Math.abs(event.clientX - current.x) + Math.abs(event.clientY - current.y) > 3) didMove.current = true;
    setPosition(constrain(current.originX + event.clientX - current.x, current.originY + event.clientY - current.y));
  }

  function finish() { drag.current = null; setGrabbed(false); }

  function keyboard(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Home" || event.key === "Escape") {
      event.preventDefault();
      finish();
      setPosition({ x: 0, y: 0 });
      return;
    }
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const step = event.shiftKey ? 20 : 8;
    const directions: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    const direction = directions[event.key];
    if (direction) {
      event.preventDefault();
      setPosition(constrain(position.x + direction[0], position.y + direction[1]));
    }
  }

  return (
    <div ref={area} className={styles.noteArea}>
      <div ref={paper} className={styles.paper} data-grabbed={grabbed} style={{ translate: `${position.x}px ${position.y}px` }}>
        <button type="button" className={styles.noteHandle} aria-describedby="about-note-help"
          onClick={() => {
            if (didMove.current) { didMove.current = false; return; }
            finish();
            setPosition({ x: 0, y: 0 });
          }}
          onPointerDown={start} onPointerMove={move} onPointerUp={finish}
          onPointerCancel={finish} onLostPointerCapture={finish} onKeyDown={keyboard}>
          things I tend to do
        </button>
        <div className={styles.noteFlow}>
          <span>find rabbit hole</span><span aria-hidden="true">↓</span>
          <span>investigate too much</span><span aria-hidden="true">↓</span>
          <span>build / write something</span><span aria-hidden="true">↓</span>
          <span>repeat</span>
        </div>
      </div>
      <p id="about-note-help" className={styles.noteHelp}>
        <span className={styles.desktopHelp}>Move the heading · arrow keys too · Home to reset</span>
        <span className={styles.mobileHelp}>a familiar little loop</span>
      </p>
    </div>
  );
}
