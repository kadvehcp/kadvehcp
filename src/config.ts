import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://kamal.pages.dev/",
  author: "Kamal Kishor (kadvehcp)",
  desc: "The personal blog website of Kamal Kishor (kadvehcp) provides insights into my life, as well as my thoughts and opinions on various topics.",
  title: "kadvehcp",
  ogImage: "kadv-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kadvehcp",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/kadvehcp",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/kadvehcp",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kadvehcp",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:kadvehcp@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

