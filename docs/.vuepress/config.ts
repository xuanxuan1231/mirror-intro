import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: ".us.kg 镜像",
  description: "免费、易用的网站镜像",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
