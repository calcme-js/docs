import { defineConfig, DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Sidebar = [
  { items: [{ text: "Home", link: "/" }] },
  {
    text: "Documentação",
    items: [
      { text: "Introdução", link: "/introduction" },
      { text: "Como instalar?", link: "/como-instalar" },
    ],
  },
  {
    items: [{ text: "FAQ", link: "/faq" }],
  },
];

export default defineConfig({
  title: "CalcMe-API",
  base: process.env.BASE_URL || "/",
  markdown: {},
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Documentação",
        link: "/introduction",
      },
      {
        text: "API Reference",
        link: "https://calcme-api.github.io/docs/reference/index.html",
      },
      {
        text: "GitHub",
        link: "https://github.com/icleitoncosta/calcme-api",
      },
    ],
    sidebar,
  },
});