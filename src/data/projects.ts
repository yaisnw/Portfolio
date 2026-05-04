export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Blogging Platform",
    description:
      "Full-stack blogging platform with a Lexical rich-text editor, Google OAuth, AWS S3 image uploads, and a fully typed React 19 + Express + PostgreSQL stack. Deployed via Vercel with Docker images published to Docker Hub.",
    tags: ["TypeScript", "React 19", "Redux Toolkit", "Express", "PostgreSQL", "AWS S3", "Docker"],
    github: "https://github.com/yaisnw/blogging-platform",
    demo: "https://blogging-platform-pearl-six.vercel.app/",
    featured: true,
  },
  {
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce storefront — React + Redux client with cart, checkout, and Framer Motion animations, backed by a Node/Express REST API with Passport.js + JWT auth, order processing, and bcrypt-hashed accounts. PostgreSQL on Supabase, deployed on Render.",
    tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Passport.js", "JWT", "Supabase"],
    github: "https://github.com/yaisnw/ecommerceclient",
    demo: "https://ecommerceclient-15f2.onrender.com/login",
  },
  {
    title: "Jammming",
    description:
      "A Spotify-powered playlist builder. Search tracks, compose custom playlists, and save them straight to your Spotify account via OAuth and the Web API.",
    tags: ["React", "Spotify Web API", "OAuth"],
    github: "https://github.com/yaisnw/Jammming",
  },
  {
    title: "Reddit Client",
    description:
      "A Reddit browser with search, New/Top filtering, and full media support — images, galleries, and videos render without conflicts. Recently revisited to fix gallery resolution and video/thumbnail rendering bugs.",
    tags: ["React", "Redux Toolkit", "Reddit JSON API"],
    github: "https://github.com/yaisnw/reddit-clone",
    demo: "https://yaisnw.github.io/reddit-clone",
  },
  {
    title: "ASC — Ayendah Sazan Community",
    description:
      "A client project for the Ayendah Sazan community in Leeds — event tickets, event calendar, course subscriptions, and member access in one platform. Stripe-powered payments for ticket sales and recurring subscriptions, with Cloudinary image hosting.",
    tags: ["React", "JavaScript", "Express", "MongoDB", "Stripe", "Cloudinary"],
  },
];
