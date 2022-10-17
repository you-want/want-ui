import {defineConfig} from 'vitepress'
import demoBlock from "vitepress-theme-demoblock";

const sidebar = {
  "/": [
    { text: "快速开始", items: [] },
    {
      text: "通用",
      items: [
        { text: "Button 按钮", link: "/components/button/" }
      ],
    },
    { text: "导航",  items: [] },
    { text: "反馈",  items: [] },
    { text: "数据录入",  items: [] },
    { text: "数据展示",  items: [] },
    { text: "布局",  items: [] },
  ],
};

export default defineConfig({
  title: "🔨  Want-UI",
  description: "Vue3 UI 组件库",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = demoBlock
      md.use(demoBlockPlugin);
    },
  },
});
