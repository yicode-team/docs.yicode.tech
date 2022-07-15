import { defineUserConfig } from "vuepress";
import themeConfig from "./themeConfig";

export default defineUserConfig({
    base: "/",
    title: "易编程开源文档",
    description: "易编程开源文档",
    dest: "./dist",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "易编程开源文档",
            description: "何以解忧，唯有代码，易编程开源文档中心。",
        },
    },
    theme: themeConfig,
});
