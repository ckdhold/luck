# cked

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

项目已配置支持 Cloudflare Pages 部署。这是一个 Vue 3 + Vite 的抽奖系统项目，可以完全部署到 Cloudflare Pages。

#### 方法一：通过 Cloudflare Dashboard 部署

1. **登录 Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com/
   - 登录你的账户

2. **创建 Pages 项目**
   - 进入 "Workers & Pages" → "Pages"
   - 点击 "Create a project"
   - 选择 "Connect to Git"（推荐）或 "Upload assets"

3. **连接 Git 仓库**
   - 选择你的 Git 提供商（GitHub、GitLab 等）
   - 授权 Cloudflare 访问你的仓库
   - 选择这个项目仓库

4. **配置构建设置**
   - **项目名称**: `log-lottery`（或你喜欢的名称）
   - **生产分支**: `main` 或 `master`（根据你的主分支）
   - **构建命令**: `pnpm build` 或 `npm run build`
   - **构建输出目录**: `dist`
   - **根目录**: `/`（项目根目录）

5. **环境变量（可选）**
   - 如果项目需要环境变量，在 "Environment variables" 中添加
   - 例如：`VITE_BASE_URL`（如果需要）

6. **部署**
   - 点击 "Save and Deploy"
   - Cloudflare 会自动构建并部署你的项目

#### 方法二：使用 Wrangler CLI 部署

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   # 或
   pnpm add -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **构建项目**
   ```bash
   pnpm build
   ```

4. **部署到 Pages**
   ```bash
   wrangler pages deploy dist --project-name=log-lottery
   ```

#### 重要配置说明

**1. Base 路径配置**

当前 `vite.config.ts` 中，非 file 模式的 base 路径是 `/`。

**如果部署到 Cloudflare Pages 的根路径（推荐）：**
- 当前配置已正确：`base: mode === 'file' ? './' : '/'`

**如果部署到子路径（如 `/log-lottery/`）：**
- 需要修改 `vite.config.ts` 中的 base 配置为 `/log-lottery/`
- 或者使用自定义域名，然后保持为 `/`

**2. Vue Router 配置**

项目使用 Vue Router，需要确保：
- 使用 History 模式（需要服务器支持）
- 已创建 `_redirects` 文件（已包含在项目中）用于处理路由

**3. API 请求配置**

如果项目需要调用后端 API：
- 开发环境：使用 Vite 代理（`/api` → `VITE_BASE_URL`）
- 生产环境：需要配置实际的 API 地址
- 可以通过环境变量 `VITE_BASE_URL` 配置

#### 自定义域名

1. 在 Cloudflare Pages 项目设置中
2. 进入 "Custom domains"
3. 添加你的自定义域名
4. Cloudflare 会自动配置 DNS

#### 持续部署

如果通过 Git 连接部署：
- 每次推送到主分支会自动触发部署
- 可以在 "Deployments" 中查看部署历史
- 支持预览部署（Pull Request）

#### 注意事项

1. **构建命令**: 确保使用 `pnpm build` 或 `npm run build`（不是 `build:file`）
2. **输出目录**: 确保是 `dist`（不是 `dist-file`）
3. **Node 版本**: Cloudflare Pages 默认使用 Node 18，如果需要其他版本，可以在构建设置中配置
4. **包管理器**: 如果使用 `pnpm`，确保在构建命令前添加 `pnpm install`

#### 故障排除

**构建失败**
- 检查构建命令是否正确
- 检查 Node 版本是否兼容
- 查看构建日志中的错误信息

**路由 404 错误**
- 确保 `_redirects` 文件在 `dist` 目录中
- 检查 Vue Router 的 base 配置

**API 请求失败**
- 检查 CORS 配置
- 确认 API 地址配置正确
- 考虑使用 Cloudflare Workers 作为 API 代理


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
├── wrangler.toml     # Cloudflare 配置
└── vite.config.ts    # Vite 配置
```

## 使用说明

详细的使用说明请查看应用内的"操作说明"页面，或查看 `public/readme-zhCn.md` 和 `public/readme-en.md`

## 许可证

MIT License