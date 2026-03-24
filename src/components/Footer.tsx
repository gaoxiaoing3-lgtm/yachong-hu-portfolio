import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    '快速链接': [
      { name: '首页', path: '/' },
      { name: '作品集', path: '/portfolio' },
      { name: '关于我', path: '/about' },
      { name: '联系', path: '/contact' },
    ],
    '服务领域': [
      { name: '虚拟演播室制作', path: '' },
      { name: '舞美效果图设计', path: '' },
      { name: '虚拟项目落地', path: '' },
      { name: 'AIGC工具开发', path: '' },
    ],
    '技术栈': [
      { name: 'Unity & Unreal Engine', path: '' },
      { name: 'AI & 机器学习', path: '' },
      { name: '3D建模与动画', path: '' },
      { name: '实时渲染技术', path: '' },
    ],
  }

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: 'Email',
      url: 'mailto:contact@example.com',
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-500 rounded-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">胡亚崇</h2>
                <p className="text-gray-400">AIGC动画师 & 虚拟制作专家</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              专注于虚拟演播室制作、舞美效果图设计、虚拟项目落地。
              将前沿技术与艺术创意结合，打造卓越的视觉体验。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.path && link.path !== '' ? (
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <span className="text-gray-400">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} 胡亚崇. 保留所有权利.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-white transition-colors">
              服务条款
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie政策
            </a>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            本网站使用 React + TypeScript + Tailwind CSS 构建
            <span className="mx-2">•</span>
            部署于 Vercel
            <span className="mx-2">•</span>
            设计灵感来自现代作品集最佳实践
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer