export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "My Notes",
  description: "Keep your notes on track with My notes.",
  navItems: [
    {
      label: "Home",
      href: "/start",
    },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/start",
    },
    // {
    //   label: "About",
    //   href: "/about",
    // },
    // {
    //   label: "Logout",
    //   href: "/logout",
    // },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
