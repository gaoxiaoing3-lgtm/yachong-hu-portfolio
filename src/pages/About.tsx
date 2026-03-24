import React from 'react'
import { motion } from 'framer-motion'
import { Award, Briefcase, GraduationCap, Users, Target, Zap } from 'lucide-react'

const About = () => {
  const skills = [
    { name: '虚拟演播室制作', level: 95 },
    { name: '舞美效果图设计', level: 90 },
    { name: 'AIGC工具开发', level: 85 },
    { name: '3D建模与动画', level: 88 },
    { name: '实时渲染技术', level: 92 },
    { name: 'AI算法应用', level: 87 },
  ]

  const experiences = [
    {
      year: '2023-至今',
      role: '高级AIGC动画师',
      company: '创新科技公司',
      description: '负责虚拟演播室系统设计与AIGC工具开发',
    },
    {
      year: '2021-2023',
      role: '舞美设计师',
      company: '艺术制作公司',
      description: '大型演出舞美设计与3D可视化实现',
    },
    {
      year: '2019-2021',
      role: '虚拟制作工程师',
      company: '数字媒体公司',
      description: '虚拟现实项目开发与技术支持',
    },
    {
      year: '2017-2019',
      role: '3D动画师',
      company: '动画工作室',
      description: '影视动画制作与特效设计',
    },
  ]

  const education = [
    {
      degree: '数字媒体艺术硕士',
      school: '中央美术学院',
      year: '2015-2017',
    },
    {
      degree: '计算机科学学士',
      school: '清华大学',
      year: '2011-2015',
    },
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            关于我
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            将科技与艺术完美结合，创造卓越的视觉体验
          </p>
        </motion.div>

        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              胡亚崇
              <span className="text-primary-500 block text-2xl mt-2">
                AIGC动画师 & 虚拟制作专家
              </span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                我是胡亚崇，一名专注于艺术设计与技术融合的AIGC动画师。
                拥有超过8年的虚拟制作和数字艺术经验，致力于将前沿科技应用于创意产业。
              </p>
              <p>
                我的专业领域涵盖虚拟演播室制作、舞美效果图设计、虚拟项目落地，
                以及AIGC工具的开发与应用。我相信技术应该服务于创意，
                而不是限制创意。
              </p>
              <p>
                在过去的项目中，我成功地将AI技术、实时渲染和3D可视化
                应用于各种艺术创作场景，帮助客户实现他们的创意愿景。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-300 rounded-2xl p-8 h-full">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Target className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">使命</h3>
                    <p className="text-gray-600">
                      用技术赋能艺术创作，推动虚拟制作行业发展
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Zap className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">专长</h3>
                    <p className="text-gray-600">
                      AIGC工具开发、实时渲染、3D可视化
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Users className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">合作理念</h3>
                    <p className="text-gray-600">
                      深度理解客户需求，提供定制化解决方案
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            专业技能
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-primary-500 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-primary-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">工作经历</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                  <div className="border-l-2 border-gray-200 pl-6 pb-8">
                    <div className="text-sm text-primary-500 font-medium mb-1">
                      {exp.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-gray-600 mb-2">{exp.company}</div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">教育背景</h2>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                  <div className="border-l-2 border-gray-200 pl-6 pb-8">
                    <div className="text-sm text-primary-500 font-medium mb-1">
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-gray-600">{edu.school}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-primary-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">认证与奖项</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary-500 mb-2">
                Adobe认证专家
              </div>
              <div className="text-gray-600">After Effects & Premiere Pro</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary-500 mb-2">
                Unity认证开发者
              </div>
              <div className="text-gray-600">实时3D开发专家</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary-500 mb-2">
                数字艺术创新奖
              </div>
              <div className="text-gray-600">2022年度最佳创新</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary-500 mb-2">
                AI应用先锋
              </div>
              <div className="text-gray-600">AIGC领域贡献奖</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About