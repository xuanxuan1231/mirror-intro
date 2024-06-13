import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: ["jsdelivr", "github", "bingai", "docker", "gcr", "quay", ],
  },
  {
    text: "镜像站",
    icon: "lightbulb",
    children: [
      {
        text: "JsDelivr",
        
        link: "https://jsdelivr.mirrors.us.kg",
      },
      {
        text: "GitHub",
        icon: "fab fa-github",
        link: "https://github.mirrors.us.kg",
      },
      {
        text: "Bing AI",
        icon: "fab fa-microsoft",
        link: "https://bingai.mirrors.us.kg",
      },
      {
        text: "Docker Hub Registry",
        icon: "fab fa-docker",
        link: "https://docker.mirrors.us.kg",
      },
      {
        text: "Google Container Registry",
        icon: "fab fa-google",
        link: "https://gcr.mirrors.us.kg",
      },
      {
        text: "Red Hat Quay",
        icon: "fab fa-redhat",
        link: "https://quay.mirrors.us.kg",
      },
      {
        text: "GitHub Container Registry",
        icon: "fab fa-github-square",
        link: "",
      },
    ],
  },
  "/contribute/",
]);
