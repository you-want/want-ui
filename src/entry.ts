import { App } from "vue";
import WButton from "./button";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";

// 导出单独组件
export { WButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(WButton.name, WButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
