#!/bin/bash
# 一键部署脚本

echo "🚀 开始部署作品集网站到Vercel"
echo "=" * 60

# 检查是否在正确目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 检查构建
echo "📦 检查项目构建..."
if npm run build 2>&1 | grep -q "built in"; then
    echo "✅ 项目构建成功"
else
    echo "❌ 项目构建失败"
    exit 1
fi

# 推送到GitHub
echo "📤 推送到GitHub..."
git add .
git commit -m "部署准备: $(date '+%Y-%m-%d %H:%M:%S')" 2>/dev/null
git push origin main 2>/dev/null && echo "✅ 代码已推送到GitHub"

echo ""
echo "=" * 60
echo "🎯 部署方式选择："
echo ""
echo "1. 🌐 通过Vercel网站部署（推荐）"
echo "   访问: https://vercel.com/new"
echo "   选择仓库: gaoxiaoing3-lgtm/yachong-hu-portfolio"
echo ""
echo "2. 💻 通过Vercel CLI部署"
echo "   运行: npm install -g vercel && vercel"
echo ""
echo "3. 🤖 通过GitHub Actions自动部署"
echo "   参考: DEPLOYMENT.md 文件"
echo ""
echo "=" * 60
echo "📋 项目信息："
echo "   仓库: https://github.com/gaoxiaoing3-lgtm/yachong-hu-portfolio"
echo "   技术栈: React + TypeScript + Tailwind CSS"
echo "   构建命令: npm run build"
echo "   输出目录: dist"
echo ""
echo "🎉 部署完成后，你的网站将可以通过Vercel提供的域名访问！"
echo "=" * 60