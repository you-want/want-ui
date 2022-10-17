// import { createApp } from "vue";

// import WButton from "./button";
// import SFCButton from "./button/SFCButton.vue";
// import JSXButton from "./button/JSXButton";

import { createApp } from "vue/dist/vue.esm-browser";
import WantUI from "./entry";

createApp({
  template: `
    <div style="margin-bottom:20px;">
      <WButton color="blue">蓝色按钮</WButton>
      <WButton color="green">绿色按钮</WButton>
      <WButton color="gray">灰色按钮</WButton>
      <WButton color="yellow">黄色按钮</WButton>
      <WButton color="red">红色按钮</WButton>
    </div>
    <div style="margin-bottom:20px;">
        <WButton color="blue" plain>朴素按钮</WButton>
        <WButton color="green" plain>绿色按钮</WButton>
        <WButton color="gray" plain>灰色按钮</WButton>
        <WButton color="yellow" plain>黄色按钮</WButton>
        <WButton color="red" plain>红色按钮</WButton>
    </div>
    <div style="margin-bottom:20px;">
        <WButton size="small" plain>小按钮</WButton>
        <WButton size="medium" plain>中按钮</WButton>
        <WButton size="large" plain>大按钮</WButton>
    </div>
    <div style="margin-bottom:20px;">
        <WButton color="blue" round plain icon="search">搜索按钮</WButton>
        <WButton color="green" round plain icon="edit">编辑按钮</WButton>
        <WButton color="gray" round plain icon="check">成功按钮</WButton>
        <WButton color="yellow" round plain icon="message">提示按钮</WButton>
        <WButton color="red" round plain icon="delete">删除按钮</WButton>
    </div>
    <div style="margin-bottom:20px;">
        <WButton color="blue" round plain icon="search"></WButton>
        <WButton color="green" round plain icon="edit"></WButton>
        <WButton color="gray" round plain icon="check"></WButton>
        <WButton color="yellow" round plain icon="message"></WButton>
        <WButton color="red" round plain icon="delete"></WButton>
    </div>
  `,
})
  .use(WantUI)
  .mount("#app");
