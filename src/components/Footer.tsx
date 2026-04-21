import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    '导航': [
      { name: '首页', path: '/' },
      { name: '作品集', path: '/portfolio' },
      { name: '关于我', path: '/about' },
      { name: '联系', path: '/contact' },
    ],
    '服务': [
      { name: '虚拟演播室制作', path: '' },
      { name: '舞美效果图设计', path: '' },
      { name: '虚拟项目落地', path: '' },
      { name: 'AIGC工具开发', path: '' },
    ],
    '技术栈': [
      { name: 'Unreal Engine', path: '' },
      { name: 'Unity / C#', path: '' },
      { name: 'Blender', path: '' },
      { name: 'TouchDesigner', path: '' },
    ],
  }

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, name: 'GitHub', url: 'https://github.com' },
    { icon: <Linkedin className="w-4 h-4" />, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <Mail className="w-4 h-4" />, name: 'Email', url: 'mailto:contact@example.com' },
  ]

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-custom section-padding !py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-xl font-semibold">胡亚崇</span>
                <p className="text-ink-400 text-sm">AIGC动画师 & 虚拟制作</p>
              </div>
            </div>
            <p className="text-ink-400 text-sm leading-relaxed max-w-xs">
              专注虚拟演播室制作、舞美效果图设计、虚拟项目落地与AIGC工具开发。将前沿技术与艺术创意结合，打造卓越视觉体验。
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-ink-800 rounded-xl hover:bg-ink-700 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-mono text-ink-400 uppercase tracking-widest mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-sm text-ink-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <span className="text-sm text-ink-500">{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-ink-800 my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ink-500">
          <div>© {currentYear} 胡亚崇. 保留所有权利.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-6 pt-6 border-t border-ink-800 text-center">
          <p className="text-ink-600 text-xs font-mono">
            React + TypeScript + Tailwind CSS + Framer Motion · 部署于 Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
