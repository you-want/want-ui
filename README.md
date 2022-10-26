<p align="center">
<img src="https://github.com/you-want/want-ui-vite/blob/main/docs/logo.png"/>
</p>

<h1 align="center">want-ui-vite</h1>

<p align="center">
你想要的一个 UI 组件库
</p>

<p align="center"><a href="https://www.npmjs.com/package/@you-want/want-ui-vite"><img src="https://img.shields.io/npm/v/@you-want/want-ui-vite?color=c95f8b&amp;label=" alt="NPM version"></a></p>

[![CI](https://github.com/you-want/want-ui-vite/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/you-want/want-ui-vite/actions/workflows/main.yml)
![MIT](https://img.shields.io/github/license/you-want/want-ui-vite?color=red)
[![codecov](https://codecov.io/gh/you-want/want-ui-vite/branch/main/graph/badge.svg?token=7QHP5W7BHZ)](https://codecov.io/gh/you-want/want-ui-vite)

[文档](https://want-ui-vite.vercel.app/)

## Features

前端工程化 UI 组件库。

- 基于 Vue3 框架
- 支持 JSX 与 Vue 单文件组件
- vitest + Vue3 plugins 实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 Vite 构建
- Vitepress + Vercel 文档网站搭建
- 基于 Github Action CI 实现持续集成与交付

## LICENSE

[MIT](../../LICENSE)

Copyright (c) 2022 - present @you-want（Rain9）

## 待处理 bug

1、vitepress-theme-demoblock

<https://github.com/xinlei3166/vitepress-theme-demoblock/issues/28>

**目前的解决办法**：降低了 vitepress 版本（"vitepress": "^1.0.0-alpha.19", ——> "vitepress": "1.0.0-alpha.8",）

2、plugin:unocss:global:build:generate

pnpm build:components 打包之后会爆一些警告？ 暂时不知道怎么处理
