export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  repo?: string;
};

// TODO: 実際のプロフィール情報に差し替えてください
export const profile = {
  name: "Yuya Sasaki",
  role: "Web Engineer",
  tagline:
    "使う人の体験を第一に考え、\nシンプルで機能的なプロダクトを作ってます。",
  bio: "ユーザーにとって分かりやすく、保守しやすいコードを書くことを大切にしています。\n新しい技術のキャッチアップにも積極的に取り組んでいます。",
  skills: [
    "PHP(Laravel)",
    "Java(Spring Boot)",
    "Go(Gin)",
    "Next.js",
    "HTML/CSS/JavaScript",
    "SQL",
    "Git",
  ],
  links: {
    github: "https://github.com/osasadev-lab",
    email: "osasadev@gmail.com",
  },
};

// TODO: 実際の制作物情報に差し替えてください
export const projects: Project[] = [
  {
    id: "project-1",
    title: "コーポレートサイトを考える",
    description:
      "球体を回転させながらコンテンツを探索する、3Dコーポレートサイトのサンプルです。",
    tags: ["Next.js", "React", "TypeScript", "Three.js", "Tailwind CSS"],
    image: "/works/1.png",
    link: "https://3d-fictitious-company.vercel.app/",
    repo: "https://github.com/osasadev-lab/3D_FictitiousCompany",
  },
  {
    id: "project-2",
    title: "サンプルプロジェクト B",
    description:
      "プロジェクトの概要をここに記載します。使用技術や役割、成果などを簡潔にまとめると伝わりやすくなります。",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/works/project-2.svg",
    link: "#",
    repo: "#",
  },
  {
    id: "project-3",
    title: "サンプルプロジェクト C",
    description:
      "プロジェクトの概要をここに記載します。個人開発・チーム開発いずれの場合も、担当範囲を明記すると良いです。",
    tags: ["Python", "FastAPI", "Docker"],
    image: "/works/project-3.svg",
    link: "#",
    repo: "#",
  },
];
