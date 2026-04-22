import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'

const filters = ['全部', '广电虚拟制作', '品牌活动', 'AI 数字内容']

const projects = [
  {
    id: 1,
    title: 'CCTV-2 财经频道虚拟包装项目',
    category: '广电虚拟制作',
    description: '参与频道改版包装、《财智奥运》《两会大数据》《数说财经》等 AR / VR 视觉设计与制作。',
    tech: ['AR / VR', '广电包装', '实时图形'],
    accent: 'from-[#1c2430] to-[#5d4930]',
  },
  {
    id: 2,
    title: '湖北卫视演播室改造与节目包装',
    category: '广电虚拟制作',
    description: '参与频道改版、大屏设计与 VR 演播室改造，服务《长江新闻号》《防务听涛》等节目。',
    tech: ['演播室改造', '包装设计', '系统实施'],
    accent: 'from-[#16202c] to-[#344a68]',
  },
  {
    id: 3,
    title: '广东体育频道与欧洲杯转播',
    category: '广电虚拟制作',
    description: '负责体育频道长期虚拟效果服务，并担任《欧洲杯》转播项目 VR / XR 技术效果负责人。',
    tech: ['体育转播', 'XR', '技术统筹'],
    accent: 'from-[#1a1d24] to-[#6d5428]',
  },
  {
    id: 4,
    title: '广汽丰田大会系列项目',
    category: '品牌活动',
    description: '服务经销商大会、改善大会等企业活动场景，承担 VR / XR 技术效果负责人工作。',
    tech: ['企业发布', 'XR 舞台', '现场执行'],
    accent: 'from-[#1d2433] to-[#6d3b2a]',
  },
  {
    id: 5,
    title: '香港院校与机构技术咨询',
    category: '品牌活动',
    description: '为香港中文大学、香港岭南大学、香港政府总部等项目提供 XR / LED 扩展现实咨询、培训与维护。',
    tech: ['培训', '咨询', 'LED XR'],
    accent: 'from-[#20242b] to-[#46515f]',
  },
  {
    id: 6,
    title: 'AI 数字吉祥物视频项目',
    category: 'AI 数字内容',
    description: '负责民信药业 / 广州中医药大学附属医院项目策划、AI 内容制作与生成。',
    tech: ['AI 视频', '数字内容', '项目策划'],
    accent: 'from-[#241d1d] to-[#65513d]',
  },
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('全部')

  const filteredProjects =
    activeFilter === '全部' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="section-padding page-shell">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="eyebrow text-primary-700">Portfolio</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-900 mt-4 leading-tight">
            项目作品
          </h1>
          <p className="text-ink-700 text-lg md:text-xl mt-5 max-w-3xl leading-relaxed">
            以广电虚拟制作、品牌活动技术实施与 AI 数字内容项目为主线，展示近年代表性工作方向与服务能力。
          </p>
        </motion.div>

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
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-200 border ${
                activeFilter === filter
                  ? 'bg-ink-900 text-white border-ink-900'
                  : 'bg-white text-ink-800 border-[#d9d2c5] hover:border-ink-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group cursor-pointer"
              >
                <div className="lux-card overflow-hidden h-full flex flex-col">
                  <div className={`relative h-56 bg-gradient-to-br ${project.accent} overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)]" />
                    <div className="absolute inset-x-0 top-0 p-5 flex items-start justify-between gap-3">
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-white/92 backdrop-blur-sm">
                        {project.category}
                      </span>
                      <Layers className="w-9 h-9 text-white/28" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-black/20 px-3 py-1 text-xs font-mono text-white/92 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="font-display text-[2rem] leading-tight text-ink-900 group-hover:text-primary-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-ink-800 leading-relaxed mt-4 flex-grow">{project.description}</p>
                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#e4ddcf]">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="rounded-full bg-[#f3eee5] px-3 py-1 text-xs font-mono text-ink-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-4 h-4 text-ink-500 group-hover:text-primary-700 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: '服务起点', value: '2012' },
            { label: '重点领域', value: '广电 / XR' },
            { label: '项目类型', value: '转播 / 发布 / 培训' },
            { label: '内容延展', value: 'AI 数字内容' },
          ].map((stat) => (
            <div key={stat.label} className="lux-card p-7 text-center">
              <div className="font-display text-3xl text-ink-900 mb-2">{stat.value}</div>
              <div className="text-ink-700 text-sm font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
