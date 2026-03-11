export type Milestone = {
    period: string;
    title: string;
    org: string;
    highlights: string[];
    updates?: { date: string; text: string }[];
  };
  
  export const milestones: Milestone[] = [
    {
      period: "2025 — Present",
      title: "Senior Software Engineer",
      org: "Company",
      highlights: [
        "1. ..........",
        "2. ..........",
        "3. ..........",
      ],
      updates: [
        { date: "Test1", text: "Des1" },
      ],
    },
    {
        period: "2022 — 2025",
        title: "Senior Software Engineer",
        org: "Company",
        highlights: [
          "1. ..........",
          "2. ..........",
          "3. ..........",
        ],
        updates: [
          { date: "Test", text: "Des2" },
        ],
      },
  ];