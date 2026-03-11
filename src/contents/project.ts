export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    timeframe?: string;
    links: { label: "GitHub" | "Demo" | "Doc"; href: string }[];
    featured?: boolean;
  };
  
  export const projects: Project[] = [
    {
      slug: "",
      title: "Project1",
      description: "Des1",
      tags: ["Skill1", "Skill2"],
      timeframe: "2026",
      links: [
        { label: "Demo", href: "#" },
        { label: "Doc", href: "#" },
      ],
      featured: true,
    },
    {
        slug: "",
        title: "Project2",
        description: "Des2",
        tags: ["Skill1", "Skill2"],
        timeframe: "2026",
        links: [
          { label: "Demo", href: "#" },
          { label: "Doc", href: "#" },
        ],
        featured: true,
      },
      {
        slug: "",
        title: "Project3",
        description: "Des3",
        tags: ["Skill1", "Skill2"],
        timeframe: "2026",
        links: [
          { label: "Demo", href: "#" },
          { label: "Doc", href: "#" },
        ],
        featured: true,
      },
  ];