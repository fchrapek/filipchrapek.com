export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: "Filip Chrapek",
  subtitle: "About dev, design and everything what interests me at the moment.",
  description:
    "About dev, design and everything what interests me at the moment.",
  image: {
    src: "",
    alt: "",
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/",
    },

    {
      text: "Tags",
      href: "/tags",
    },
  ],
  footerNavLinks: [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Terms",
      href: "/terms",
    },
  ],
  socialLinks: [
    {
      text: "",
      href: "",
    },
    {
      text: "",
      href: "",
    },
    {
      text: "",
      href: "",
    },
  ],
  hero: {
    title: "",
    text: "Hey there 👋 I'm Filip and I've seen The Office over 17 times. <br /> I'm also into coding, designing, and picking up new skills 🚀",
    image: {
      src: "",
      alt: "",
    },
    actions: [
      {
        text: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  subscribe: {
    title: "Subscribe to Dante Newsletter",
    text: "One update per week. All the latest posts directly in your inbox.",
    formUrl: "#",
  },
  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;
