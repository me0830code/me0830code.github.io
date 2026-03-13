export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    timeframe?: string;
    status?: "WIP" | "Demo" | "Shipped";
    links: { label: "GitHub" | "Demo" | "Doc"; href: string }[];
    cover?: string;
    featured?: boolean;
  };
  
  export const projects: Project[] = [
    {
      slug: "",
      title: "Project1",
      description: "Des1",
      tags: ["Skill1", "Skill2"],
      timeframe: "2026",
      status: "Demo",
      links: [
        { label: "Demo", href: "#" },
        { label: "Doc", href: "#" },
      ],
      cover: "projectPreview/test.png",
      featured: true,
    },
    {
        slug: "",
        title: "Project2",
        description: "Des2",
        tags: ["Skill1"],
        timeframe: "2026",
        status: "Shipped",
        cover: "projectPreview/test.png",
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
        tags: ["Skill2"],
        timeframe: "2026",
        status: "WIP",
        cover: "projectPreview/test.png",
        links: [
          { label: "Demo", href: "#" },
          { label: "Doc", href: "#" },
        ],
        featured: true,
      },
  ];