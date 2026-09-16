# 温少豪 · 个人主页（Vue 3 + Vite）

基于个人简历生成的单页站点，使用 **Vue 3（`<script setup>` 组合式 API）+ Vite** 构建。

- 亮色 / 暗色主题切换：`index.html` 内联脚本在首帧渲染前确定主题（跟随系统偏好，手动切换后记忆到 localStorage），无暗色闪白；支持 `?theme=dark` 强制预览
- 响应式布局（桌面 / 移动端抽屉式导航）
- `v-reveal` 自定义指令实现滚动显现动画（IntersectionObserver，尊重 `prefers-reduced-motion`）
- 导航滚动高亮、回到顶部
- **打印导出**：右上角打印机图标调用浏览器打印，内置 `@media print` 样式可直接导出 A4 简历 PDF

## 目录结构

```
resume-site-vue/
├── index.html                 # 入口 HTML（含主题初始化内联脚本）
├── package.json
├── vite.config.js
└── src/
    ├── main.js                # 应用入口，注册 v-reveal 指令
    ├── App.vue                # 页面组装
    ├── assets/main.css        # 主题变量 / 全局样式 / 打印样式
    ├── data/resume.js         # ★ 全部简历文案（改内容只改这个文件）
    ├── directives/reveal.js   # v-reveal 滚动显现指令
    └── components/
        ├── SiteNav.vue        # 吸顶导航（主题切换 / 打印 / 移动端菜单 / 滚动高亮）
        ├── HeroSection.vue    # 首屏（含 profile.json 代码卡片）
        ├── AboutSection.vue   # 个人优势
        ├── SkillsSection.vue  # 技术栈
        ├── ExperienceSection.vue # 工作经历时间线
        ├── ProjectsSection.vue   # 项目经历（数据指标 + 成果列表）
        ├── EducationSection.vue  # 教育背景
        ├── SiteFooter.vue     # 页脚
        └── BackTop.vue        # 回到顶部
```

## 使用

```bash
npm install       # 安装依赖
npm run dev       # 本地开发，默认 http://localhost:5173
npm run build     # 构建产物输出到 dist/
npm run preview   # 本地预览构建产物
```

## 修改内容

全部文案集中在 [`src/data/resume.js`](src/data/resume.js)，按 `profile` / `advantages` / `skillGroups` / `experience` / `projects` / `education` 分组，改完保存即可热更新。

配色在 `src/assets/main.css` 顶部的 `:root`（亮色）与 `[data-theme="dark"]`（暗色）变量中统一调整。

## 部署

`npm run build` 后将 `dist/` 部署到任意静态托管即可：

- **GitHub Pages / Vercel / Netlify / Cloudflare Pages**：连接仓库，构建命令 `npm run build`，产物目录 `dist`
- **Nginx**：`root` 指向 `dist` 目录即可（SPA 单页，无需 history 回退配置）
