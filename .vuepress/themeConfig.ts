import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    hostname: "https://yicode.tech",
    author: {
        name: "陈随易",
        url: "https://chensuiyi.com",
    },
    iconPrefix: "iconfont icon-",
    logo: "/logo.png",
    iconAssets: "/iconfont/iconfont.css",
    repo: "https://github.com/chenbimo",
    hideSiteNameonMobile: false,
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],
    docsDir: "",
    navbar: navbar,
    sidebar: sidebar,
    footer: "何以解忧，唯有代码，易编程开源生态文档中心",
    displayFooter: true,
    editLink: false,
    lastUpdated: true,
    pure: false,
    encrypt: {},
    plugins: {
        blog: false,
        mdEnhance: {
            gfm: true,
            container: true,
            vpre: true,
            tabs: true,
            codetabs: true,
            align: true,
            sup: true,
            sub: true,
            footnote: true,
            mark: true,
            imageMark: true,
            tasklist: true,
            flowchart: true,
            presentation: false,
        },
    },
});
