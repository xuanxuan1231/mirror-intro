import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "指南",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: ["jsdelivr", "github", "bingai", "docker", "gcr", "quay"]
    },
    {
      text: "一起来",
      icon: "code-branch",
      link: "/contribute",
    },
  ],
});
