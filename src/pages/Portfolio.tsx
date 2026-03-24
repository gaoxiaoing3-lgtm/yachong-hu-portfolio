import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, ExternalLink, Github, Eye } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: '全部作品' },
    { id: 'virtual', name: '虚拟演播室' },
    { id: 'stage', name: '舞美设计' },
    { id: 'aigc', name: 'AIGC工具' },
    { id: 'other', name: '其他项目' },
  ]

  const projects = [
    {
      id: 1,
      title: '智能虚拟演播室系统',
      category: 'virtual',
      description: '基于AI的实时虚拟演播室解决方案，支持多机位切换和实时特效',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800',
      tech: ['Unity', 'AI', '实时渲染', 'WebRTC'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: '沉浸式舞美设计平台',
      category: 'stage',
      description: '3D可视化舞美设计与预览系统，支持VR体验',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800',
      tech: ['Blender', 'Unreal Engine', 'VR', 'Three.js'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 3,
      title: 'AIGC艺术创作工具',
      category: 'aigc',
      description: '专为艺术家设计的AI辅助创作工具，支持多种艺术风格',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800',
      tech: ['Python', 'Stable Diffusion', 'WebGL', 'React'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 4,
      title: '实时动作捕捉系统',
      category: 'virtual',
      description: '低成本高精度的实时动作捕捉解决方案',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800',
      tech: ['OpenCV', 'TensorFlow', 'WebSocket', 'Node.js'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 5,
      title: '数字舞台灯光系统',
      category: 'stage',
      description: '智能化舞台灯光控制系统，支持实时编程',
      image: 'https://images.unsplash.com/photo-1501281667305-0d4e0ab5c5e5?auto=format&fit=crop&w=800',
      tech: ['C++', 'DMX', 'OpenGL', 'Qt'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 6,
      title: 'AI视频特效生成器',
      category: 'aigc',
      description: '基于深度学习的视频特效自动生成工具',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800',
      tech: ['PyTorch', 'FFmpeg', 'FastAPI', 'Vue.js'],
      links: {
        demo: '#',
        github: '#',
      },
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            作品集
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索我在虚拟制作、舞美设计和AIGC工具开发领域的创新项目
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">项目分类</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg card-hover h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="px-6 pb-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.links.demo}
                        className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        演示
                      </a>
                      <a
                        href={project.links.github}
                        className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        代码
                      </a>
                    </div>
                    <a
                      href={project.links.demo}
                      className="inline-flex items-center text-gray-500 hover:text-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Filter className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              暂无项目
            </h3>
            <p className="text-gray-600 mb-6">
              当前分类下没有找到项目，请尝试其他分类
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              查看全部项目
            </button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {projects.length}+
              </div>
              <div className="text-gray-600">完成项目</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                5+
              </div>
              <div className="text-gray-600">合作客户</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                3+
              </div>
              <div className="text-gray-600">技术领域</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                100%
              </div>
              <div className="text-gray-600">项目满意度</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio