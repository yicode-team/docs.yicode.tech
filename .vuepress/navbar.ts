import { navbar } from "vuepress-theme-hope";
import fastGlob from "fast-glob";
import _ from "lodash";
import path from "path";
import fs from "fs";
// 生成侧边栏
function generateSideBar() {
    let sortNames = [
        //
        { name: "开源项目", icon: "people" },
        { name: "关于介绍", icon: "people" },
    ];
    let sidebar = [];

    let fileScan = fastGlob.sync(`markdown/**/*.md`, { onlyFiles: true });

    let fileArray = fileScan
        .map((file) => {
            let paths = file.split("/").filter((v) => v);
            return paths;
        })
        .filter((fileSplit) => {
            return fileSplit.length === 4 || fileSplit.length === 5;
        })
        .forEach((item) => {
            let len = item.length;
            if (_.some(sidebar, { text: item[1] }) === false) {
                sidebar.push({
                    text: item[1],
                    icon: "template",
                    prefix: `/markdown/${item[1]}/`,
                    children: [],
                });
            }
            let index = _.findIndex(sidebar, { text: item[1] });
            if (_.some(sidebar[index].children, { text: item[2] }) === false) {
                sidebar[index].children.push({
                    text: item[2],
                    icon: "folder",
                    link: len === 4 ? `${item[2]}/${item[3]}` : `${item[2]}/${item[3]}/${item[4]}`,
                });
            }
        });

    let sidebar2 = _.sortBy(sidebar, (item) => {
        let index = _.findIndex(sortNames, { name: item.text });
        item.icon = sortNames[index] ? sortNames[index].icon : "";
        return index;
    });

    sidebar2.push({
        text: "陈随易",
        icon: "people",
        link: "https://chensuiyi.com",
    });
    sidebar2.push({
        text: "前端世界",
        icon: "people",
        link: "https://front-end.world",
    });

    return sidebar2;
}
export default navbar(generateSideBar());
