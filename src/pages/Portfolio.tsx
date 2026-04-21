import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Layers } from 'lucide-react'

const filters = ['全部', '虚拟制作', '舞美设计', '工具开发']

const projects = [
  {
    id: 1,
    title: '智能虚拟演播室系统',
    category: '虚拟制作',
    description: '基于AI的实时虚拟演播室解决方案，支持多机位虚拟运镜与直播推流。',
    tech: ['Unity', 'AI推理', '实时渲染'],
    accent: 'bg-primary-600',
  },
  {
    id: 2,
    title: '沉浸式舞美设计平台',
    category: '舞美设计',
    description: '3D可视化舞美设计与预演系统，支持VR沉浸式评审。',
    tech: ['Unreal Engine', 'Blender', 'VR'],
    accent: 'bg-ink-800',
  },
  {
    id: 3,
    title: 'AIGC艺术创作工具',
    category: '工具开发',
    description: '专为艺术家设计的AI辅助创作工作流，降低创意落地门槛。',
    tech: ['Python', 'Diffusion', 'WebGL'],
    accent: 'bg-primary-800',
  },
  {
    id: 4,
    title: '虚拟发布会直播系统',
    category: '虚拟制作',
    description: '为品牌活动构建的虚拟舞台与实时合成直播管线。',
    tech: ['UE5', 'Notch', 'LiveCore'],
    accent: 'bg-ink-700',
  },
  {
    id: 5,
    title: '舞台灯光预演工具',
    category: '舞美设计',
    description: '基于物理渲染的灯光设计预演工具，支持实时参数调整。',
    tech: ['MA3D', 'D5 Render', 'TouchDesigner'],
    accent: 'bg-primary-700',
  },
  {
    id: 6,
    title: '多模态AI分镜助手',
    category: '工具开发',
    description: '输入剧本描述自动生成故事板与分镜脚本的AI工具。',
    tech: ['GPT-4V', 'Stable Diffusion', 'React'],
    accent: 'bg-ink-900',
  },
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('全部')

  const filteredProjects = activeFilter === '全部'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="section-padding">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Portfolio</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-900 mt-3 leading-tight">
            项目作品
          </h1>
          <p className="text-ink-500 text-lg mt-4 max-w-xl leading-relaxed">
            涵盖虚拟演播室、舞美预演与AI创作工具的完整项目档案。
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === filter
                  ? 'bg-ink-900 text-white border-ink-900'
                  : 'bg-white text-ink-500 border-ink-200 hover:border-ink-400 hover:text-ink-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects grid — asymmetric masonry-inspired layout */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group cursor-pointer"
              >
                {/* Card */}
                <div className="bg-surface-100 rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Visual block */}
                  <div className={`h-52 ${project.accent} relative overflow-hidden flex items-center justify-center`}>
                    <Layers className="w-12 h-12 text-white/30" />
                    {/* Top-right tech tags */}
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                      {project.tech.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/15 text-white/90 rounded-full text-xs font-mono backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="font-mono text-xs text-primary-600 tracking-widest uppercase">{project.category}</span>
                    <h3 className="font-display text-xl font-semibold text-ink-900 mt-2 mb-3 group-hover:text-primary-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-ink-500 text-sm leading-relaxed flex-grow">{project.description}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-surface-200">
                      <div className="flex gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 bg-surface-200 text-ink-600 rounded text-xs font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-surface-200 rounded-2xl overflow-hidden"
        >
          {[
            { label: '完成项目', value: '6+' },
            { label: '服务客户', value: '5+' },
            { label: '服务领域', value: '3' },
            { label: '持续研究', value: 'AIGC' },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface-50 p-8 text-center">
              <div className="font-display text-3xl font-semibold text-ink-900 mb-1">{stat.value}</div>
              <div className="text-ink-400 text-sm font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default Portfolio
