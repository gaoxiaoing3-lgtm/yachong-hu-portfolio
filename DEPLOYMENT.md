# 🚀 Vercel 部署指南

## 项目信息
- **项目名称**: 胡亚崇 - AIGC动画师作品集
- **GitHub仓库**: https://github.com/gaoxiaoing3-lgtm/yachong-hu-portfolio
- **技术栈**: React + TypeScript + Tailwind CSS + Vite

## 部署步骤

### 方法一：通过Vercel网站部署（推荐）

1. **访问 Vercel**: https://vercel.com
2. **登录账号**: 使用GitHub账号登录
3. **导入项目**:
   - 点击 "New Project"
   - 选择 "Import Git Repository"
   - 选择 `gaoxiaoing3-lgtm/yachong-hu-portfolio`
4. **配置项目**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. **环境变量**: 无需特殊配置
6. **点击部署**: Deploy

### 方法二：通过Vercel CLI部署

```bash
# 1. 安装Vercel CLI
npm install -g vercel

# 2. 登录Vercel
vercel login

# 3. 在项目目录中部署
cd /Users/jingqi/openclaw/portfolio-website
vercel

# 4. 按照提示操作
#    - 选择项目范围
#    - 链接到现有项目或创建新项目
#    - 确认配置

# 5. 生产环境部署
vercel --prod
```

### 方法三：通过GitHub Actions自动部署

1. 在项目根目录创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

2. 在Vercel获取Token并添加到GitHub Secrets

## 部署后配置

### 自定义域名
1. 在Vercel项目设置中选择 "Domains"
2. 添加你的自定义域名
3. 按照提示配置DNS记录

### 环境变量
当前项目无需特殊环境变量

### 构建配置
- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **Node版本**: 18.x (自动检测)

## 项目结构
```
portfolio-website/
├── dist/                    # 构建输出目录
├── src/
│   ├── components/         # 可复用组件
│   ├── pages/             # 页面组件
│   ├── styles/            # 样式文件
│   └── main.tsx           # 应用入口
├── public/                # 静态资源
├── package.json           # 依赖配置
├── vite.config.ts         # Vite配置
├── tailwind.config.js     # Tailwind配置
└── tsconfig.json         # TypeScript配置
```

## 本地开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 技术特性
- ✅ **响应式设计**: 适配所有设备
- ✅ **TypeScript**: 类型安全
- ✅ **Tailwind CSS**: 原子化CSS
- ✅ **React Router**: 客户端路由
- ✅ **Framer Motion**: 动画效果
- ✅ **Vite**: 快速构建工具

## 维护说明
1. **更新依赖**: `npm update`
2. **安全检查**: `npm audit`
3. **代码格式化**: 使用Prettier
4. **类型检查**: `npx tsc --noEmit`

## 故障排除

### 构建失败
```bash
# 清理缓存
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 部署失败
1. 检查Vercel构建日志
2. 确认Node版本兼容性
3. 检查环境变量配置

### 页面空白
1. 检查控制台错误
2. 确认路由配置正确
3. 验证静态资源路径

## 联系方式
- **GitHub**: https://github.com/gaoxiaoing3-lgtm
- **项目仓库**: https://github.com/gaoxiaoing3-lgtm/yachong-hu-portfolio

---

**部署完成后，你的作品集网站将可以通过Vercel提供的域名访问！** 🎉