// 读取 vite 配置
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
import * as path from "path";
import * as fs from "fs-extra";

const buildAll = async () => {
  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);

  // 按需打包
  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "want-ui.umd.js";
  packageJson.module = "want-ui.mjs";

  fs.outputFile(
    path.resolve(config.build.outDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 过滤文件只保留包含index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      // 文件夹遍历
      const outDir = path.resolve(config.build.outDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`es`, `umd`],
        },
        outDir,
      };

      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "@you-want/want-ui-vite/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
        }`,
        `utf-8`
      );
    });
};

buildAll();
