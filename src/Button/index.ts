import Button from "./Button";
import { App } from "vue";

// 导出Button组件
export { Button };

// 导出vue插件
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
