import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StockTracker } from '../components/StockTracker'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const itemLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const itemRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const services = [
  {
    label: '01',
    title: '虚拟演播室制作',
    description: 'AI驱动的实时虚拟场景生成与渲染管线，支持多机位虚拟运镜与直播推流。',
  },
  {
    label: '02',
    title: '舞美效果图设计',
    description: '将舞美概念转化为高精度3D预演动画，提供沉浸式可视化评审体验。',
  },
  {
    label: '03',
    title: '虚拟项目落地',
    description: '从技术验证到生产交付，端到端解决虚拟制作场景落地难题。',
  },
  {
    label: '04',
    title: 'AIGC工具开发',
    description: '基于扩散模型与多模态架构，构建定制化AI辅助创作工作流。',
  },
]

const featuredProjects = [
  {
    title: '智能虚拟演播室系统',
    category: '虚拟制作',
    description: '基于AI的实时虚拟演播室解决方案',
    tech: ['Unity', 'AI', '实时渲染'],
    accent: 'bg-primary-500',
  },
  {
    title: '沉浸式舞美设计平台',
    category: '舞美设计',
    description: '3D可视化舞美设计与预演系统',
    tech: ['Blender', 'Unreal Engine', 'VR'],
    accent: 'bg-ink-700',
  },
  {
    title: 'AIGC艺术创作工具',
    category: '工具开发',
    description: '专为艺术家设计的AI辅助创作工具',
    tech: ['Python', 'AI模型', 'WebGL'],
    accent: 'bg-primary-700',
  },
]

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-end">

            {/* Left column: text — offset vertically */}
            <motion.div
              variants={itemLeft}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 lg:pt-24 space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-ink-200 text-sm text-ink-600 font-mono">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                AIGC 动画师 & 虚拟制作
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-semibold text-ink-900 leading-[1.05] tracking-tight text-balance">
                胡亚崇
                <br />
                <span className="text-primary-600">构建虚拟</span>
                <br />
                视觉叙事
              </h1>

              <p className="text-lg text-ink-500 max-w-lg leading-relaxed">
                专注虚拟演播室、舞美预演与AIGC工具开发。
                作品集涵盖沉浸式舞台设计、实时渲染引擎与多模态AI创作系统。
              </p>

              <div className="flex items-center gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-ink-900 text-white rounded-full hover:bg-ink-700 transition-colors font-medium text-base"
                >
                  作品集
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center px-8 py-4 border border-ink-300 text-ink-700 rounded-full hover:bg-ink-50 transition-colors font-medium text-base"
                >
                  合作接洽
                </a>
              </div>
            </motion.div>

            {/* Right column: visual block — asymmetric */}
            <motion.div
              variants={itemRight}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Offset layered composition */}
              <div className="relative aspect-[4/5] w-full max-w-sm ml-auto">
                <div className="absolute inset-0 rounded-4xl bg-ink-900 translate-x-6 translate-y-6" />
                <div className="relative w-full h-full rounded-4xl bg-surface-200 overflow-hidden flex items-center justify-center">
                  <Sparkles className="w-20 h-20 text-ink-400" />
                  <span className="absolute bottom-4 left-4 text-sm text-ink-500 font-mono">个人形象区</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section — asymmetric 2+1 layout */}
      <section className="section-padding bg-ink-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <span className="font-mono text-sm text-primary-400 tracking-widest uppercase">Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-4">
              专业服务
            </h2>
          </motion.div>

          {/* Asymmetric: 2+1+1 not equal columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ink-800 rounded-2xl p-8 lg:p-10 group hover:bg-ink-700 transition-colors"
              >
                <span className="font-mono text-xs text-primary-400 tracking-widest">{service.label}</span>
                <h3 className="font-display text-2xl font-semibold text-white mt-4 mb-4">
                  {service.title}
                </h3>
                <p className="text-ink-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {services.slice(2).map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 2) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ink-800 rounded-2xl p-8 lg:p-10 group hover:bg-ink-700 transition-colors"
              >
                <span className="font-mono text-xs text-primary-400 tracking-widest">{service.label}</span>
                <h3 className="font-display text-2xl font-semibold text-white mt-4 mb-4">
                  {service.title}
                </h3>
                <p className="text-ink-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Tracker Section */}
      <StockTracker />

      {/* Featured Projects — magazine layout */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Work</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 mt-2">
                精选项目
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-ink-600 hover:text-ink-900 font-medium text-base shrink-0"
            >
              全部项目
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          {/* Magazine layout: large left + stacked right */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large card — left span 2 */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 group cursor-pointer"
            >
              <div className="bg-surface-100 rounded-2xl overflow-hidden">
                <div className="h-72 bg-ink-900 relative overflow-hidden flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-ink-600" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {featuredProjects[0].tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-mono backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <span className="font-mono text-xs text-primary-600 tracking-widest uppercase">{featuredProjects[0].category}</span>
                  <h3 className="font-display text-2xl font-semibold text-ink-900 mt-2 mb-3 group-hover:text-primary-600 transition-colors">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-ink-500 leading-relaxed">{featuredProjects[0].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Stacked right cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {featuredProjects.slice(1).map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemUp}
                  className="bg-surface-100 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="h-36 bg-ink-800 relative overflow-hidden flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-ink-600" />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-xs text-primary-600 tracking-widest uppercase">{project.category}</span>
                    <h3 className="font-display text-lg font-semibold text-ink-900 mt-2 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-ink-500 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12"
          >
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 mb-4 text-balance">
                有项目合作意向？
              </h2>
              <p className="text-ink-500 text-lg leading-relaxed">
                承接虚拟演播室、舞美预演、AIGC工具开发等项目合作。
                可提供技术方案评估与报价。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center px-8 py-4 bg-ink-900 text-white rounded-full hover:bg-ink-700 transition-colors font-medium text-base"
              >
                立即联系
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border border-ink-300 text-ink-700 rounded-full hover:bg-ink-50 transition-colors font-medium text-base"
              >
                了解更多
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
