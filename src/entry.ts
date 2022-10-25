import { App } from "vue";
import WButton from "./Button";
import SFCButton from "./Button/SFCButton.vue";
import JSXButton from "./Button/JSXButton";

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
