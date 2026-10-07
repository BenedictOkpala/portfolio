export type WritingPlatform = "X" | "Paragraph" | "Medium";

export interface WritingEntry {
  id: string;
  title?: string;
  category?: string;
  platform: WritingPlatform;
  url?: string;
  excerpt?: string;
  featured?: boolean;
  homepage?: boolean;
}

// Medium and entries without a URL are supported for future archive material.
export const WRITING: readonly WritingEntry[] = [
  {
    id: "three-threads",
    title: "I killed three perfectly good threads last week.",
    category: "RESEARCH / INFRASTRUCTURE",
    platform: "X",
    url: "https://x.com/0xBuzor/status/2044860528007287034",
    excerpt: "Not because the writing sucked. Not because the angle was off. Because I couldn't actually prove the numbers I was quoting.",
    featured: true,
    homepage: true,
  },
  {
    id: "four-years",
    title: "Every four years, something strange happens.",
    category: "MARKETS / CULTURE",
    platform: "X",
    url: "https://x.com/0xBuzor/status/2070147773341614479",
    homepage: true,
  },
  {
    id: "workflow",
    title: "I don't have a workflow.",
    category: "AI / PROCESS",
    platform: "X",
    url: "https://x.com/0xBuzor/status/2038620162757173387",
    homepage: true,
  },
  {
    id: "arbitrum-fraud-proofs",
    title: "How Arbitrum's Fraud Proof System Actually Works",
    category: "TECHNICAL EXPLAINER",
    platform: "Paragraph",
    url: "https://paragraph.com/@boywthehalo@gmail.com/how-arbitrums-fraud-proof-system-actually-works",
    homepage: true,
  },
  {
    id: "narratives-liquidity",
    title: "How to Trade Narratives and Liquidity Cycles in Crypto",
    platform: "Paragraph",
    url: "https://paragraph.com/@boywthehalo@gmail.com/how-to-trade-narratives-and-liquidity-cycles-in-crypto",
  },
];

export const FEATURED_WRITING = WRITING.find((entry) => entry.featured)!;
export const HOMEPAGE_WRITING = WRITING.filter((entry) => entry.homepage && !entry.featured);
export const PUBLISHED_WRITING = WRITING.filter((entry) => entry.url && entry.title);
