# Luck

基于 Vue 3 + Vite 的抽奖系统，支持人员管理、奖品配置等功能。

## 技术栈

- **框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **UI 框架**: Tailwind CSS + DaisyUI
- **状态管理**: Pinia
- **路由**: Vue Router
- **国际化**: Vue I18n (支持中文/英文)

## 功能特性

- **抽奖功能**: 支持多种奖项配置，随机公平抽奖
- **人员管理**: Excel 模板导入/导出，人员信息管理
- **奖品配置**: 灵活的奖品设置，支持图片上传
- **界面定制**: 主题切换、颜色配置、图案设置
- **音乐管理**: 支持音乐上传和播放控制
- **响应式设计**: 适配不同屏幕尺寸
- **多语言支持**: 中文/英文切换
- **数据持久化**: 本地存储，数据不丢失

## 开发

### 环境要求

- Node.js >= 18
- pnpm >= 8 (推荐使用 pnpm)

### 安装依赖

```bash
pnpm install
```

### 开发运行

```bash
pnpm dev
```

开发服务器将在 `http://localhost:6719` 启动

### 构建

#### 标准构建（用于 Web 部署）

```bash
pnpm build
```

构建产物将输出到 `dist` 目录

本项目 fork 自 https://github.com/LOG1997/log-lottery

## 部署

### Cloudflare Pages

项目已配置支持 Cloudflare Pages 部署，详细说明请查看 [.cloudflare-pages.md](.cloudflare-pages.md)

**快速部署步骤：**

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Workers & Pages → Pages
3. 创建项目并连接 Git 仓库
4. 配置构建设置：
   - 构建命令: `pnpm build`
   - 输出目录: `dist`
   - 根目录: `/`


## 项目结构

```
luck/
├── public/              # 静态资源
│   ├── images/         # 图片资源
│   ├── _redirects      # Cloudflare Pages 重定向规则
│   └── favicon.svg     # 网站图标
├── src/
│   ├── api/            # API 请求
│   ├── assets/       # 资源文件
│   ├── components/   # 组件
│   ├── hooks/        # 组合式函数
│   ├── layout/       # 布局组件
│   ├── locales/      # 国际化文件
│   ├── router/       # 路由配置
│   ├── store/        # 状态管理
│   ├── utils/        # 工具函数
│   └── views/        # 页面组件
├── .cloudflare-pages.md  # Cloudflare Pages 部署指南
├── wrangler.toml     # Cloudflare 配置
└── vite.config.ts    # Vite 配置
```

## 使用说明

详细的使用说明请查看应用内的"操作说明"页面，或查看 `public/readme-zhCn.md` 和 `public/readme-en.md`

## 许可证

MIT License