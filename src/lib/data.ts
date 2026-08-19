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
    id: "project-4",
    title: "使用しているエージェントの可視化（設計中）",
    description:
      "ユーザーがローカルで使用しているAIエージェントの行動を可視化するサービス。ユーザーが設定した空間やアバターでエージェントが動く。空間内の家具やアバターの装飾を課金アイテムとして販売することも検討中。",
    tags: [""],
    image: "",
    link: "#",
    repo: "#",
  },
  {
    id: "project-3",
    title: "チーム/組織向けタスク管理サービス（開発中）",
    description:
      "Asana的なUIを持つ、チーム/組織向けタスク管理サービス。次期開発にてプライベートの情報に基づいたAI(RAG)エージェント機能を実装予定。",
    tags: ["Go(Gin)", "GCP(Cloud Run)", "Next.js", "React", "TypeScript", "Cloudflare", "Supabase (Postgres)"],
    image: "",
    link: "https://aibo-web.osasadev.workers.dev/",
    repo: "https://github.com/osasadev-lab/aibo_pj",
  },
  {
    id: "project-2",
    title: "待ち合わせ支援サービス「cocode」(v1.0)",
    description:
      "ユーザー間でお互いの位置情報と設定した待ち合わせ地点を共有し、待ち合わせを支援するサービスです。",
    tags: ["Go", "GCP(Cloud Run)", "Next.js", "React", "TypeScript", "Firebase", "Supabase (Postgres)", "MapLibre"],
    image: "/works/2.png",
    link: "https://cocode-505303.web.app/",
    repo: "https://github.com/osasadev-lab/cocode_project",
  },
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
];
