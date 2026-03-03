import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Video, Palette, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: '虚拟演播室制作',
      description: '专业的虚拟演播室设计与实现，打造沉浸式直播体验',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: '舞美效果图设计',
      description: '创意舞美设计，将艺术概念转化为视觉现实',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: '虚拟项目落地',
      description: '从概念到实现的完整虚拟项目解决方案',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AIGC工具开发',
      description: '定制化AIGC工具，提升艺术创作效率',
    },
  ]

  const featuredProjects = [
    {
      title: '智能虚拟演播室系统',
      category: '虚拟制作',
      description: '基于AI的实时虚拟演播室解决方案',
      tech: ['Unity', 'AI', '实时渲染'],
    },
    {
      title: '沉浸式舞美设计平台',
      category: '舞美设计',
      description: '3D可视化舞美设计与预览系统',
      tech: ['Blender', 'Unreal Engine', 'VR'],
    },
    {
      title: 'AIGC艺术创作工具',
      category: '工具开发',
      description: '专为艺术家设计的AI辅助创作工具',
      tech: ['Python', 'AI模型', 'WebGL'],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                深度耕耘艺术设计类AIGC工具类制作人
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                用<span className="text-primary-500">科技</span>创造
                <span className="text-primary-500">艺术</span>的未来
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                我是胡亚崇，专注于虚拟演播室制作、舞美效果图设计、虚拟项目落地。
                将前沿技术与艺术创意结合，打造卓越的视觉体验。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
                >
                  查看作品集
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors font-medium"
                >
                  联系合作
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-300">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Sparkles className="w-24 h-24 text-white" />
                    </div>
                    <p className="text-white text-lg">个人形象照片位置</p>
                    <p className="text-white/80 text-sm">可替换为专业照片</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-2xl -z-10 animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              专业服务领域
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              专注于AIGC与虚拟制作的前沿领域，提供全方位的创意技术服务
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
              >
                <div className="p-3 bg-primary-50 text-primary-500 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                精选项目
              </h2>
              <p className="text-gray-600">探索我的最新作品与创新实践</p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
            >
              查看全部项目
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl overflow-hidden shadow-lg card-hover">
                  <div className="h-48 bg-gradient-to-r from-primary-100 to-primary-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                          <Sparkles className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-white font-medium">项目预览图</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              准备好开始你的下一个项目了吗？
            </h2>
            <p className="text-primary-100 text-xl mb-8 max-w-2xl mx-auto">
              让我们一起将创意转化为令人惊叹的视觉现实
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
              >
                立即联系
                <ArrowRight className="w-6 h-6 ml-2" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
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