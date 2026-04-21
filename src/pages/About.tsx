import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const skills = [
  { name: 'Unreal Engine 5', level: 92 },
  { name: 'Unity / C#', level: 85 },
  { name: 'Blender / 3D建模', level: 88 },
  { name: 'AI 推理与部署', level: 80 },
  { name: 'TouchDesigner', level: 78 },
  { name: '实时渲染管线', level: 90 },
]

const timeline = [
  {
    year: '2022 — 至今',
    role: 'AIGC动画师 & 虚拟制作',
    org: '自由职业 / 项目合作',
    desc: '承接虚拟演播室、舞美预演与AI工具开发项目，服务演出、影视与品牌客户。',
  },
  {
    year: '2020 — 2022',
    role: '虚拟制作工程师',
    org: '某制作公司',
    desc: '负责虚拟舞台设计与UE实时渲染管线，支持大型直播活动与线上虚拟发布会。',
  },
  {
    year: '2018 — 2020',
    role: '3D动画师',
    org: '某动画工作室',
    desc: '参与多部商业动画与舞台视觉项目的3D建模、绑定与动画制作。',
  },
  {
    year: '2015 — 2018',
    role: '视觉设计',
    org: '某传媒公司',
    desc: '负责舞台视觉素材设计与制作，接触舞美预演与现场视觉工程。',
  },
]

const education = [
  {
    degree: '数字媒体艺术 学士',
    school: '某艺术院校',
    year: '2015',
  },
  {
    degree: '虚拟制作专项培训',
    school: '某技术中心',
    year: '2020',
  },
]

const certifications = [
  'Unreal Engine 官方认证',
  'TouchDesigner 开发者认证',
  'NVIDIA AI 推理优化认证',
  'Blender 专家级认证',
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const About = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">About</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-900 mt-3 leading-tight">
            关于我
          </h1>
        </motion.div>

        {/* Intro + Skills — 2-column */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">

          {/* Left: intro text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="font-display text-2xl md:text-3xl text-ink-800 leading-snug">
              胡亚崇，AIGC动画师，
              <br />
              专注<strong className="text-primary-600">虚拟视觉叙事</strong>与实时渲染。
            </p>
            <p className="text-ink-500 leading-relaxed">
              早年从事3D动画与视觉设计，2019年起转向虚拟制作与AI辅助创作。
              擅长大场景实时渲染、LED虚拟影棚与AIGC工作流搭建。
            </p>
            <p className="text-ink-500 leading-relaxed">
              合作客户涵盖演出演艺、影视制作、品牌活动与教育机构。
              追求将前沿技术与艺术表达融合，为每项目找到独特视觉语言。
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center px-6 py-3 bg-ink-900 text-white rounded-full hover:bg-ink-700 transition-colors font-medium text-sm"
              >
                合作接洽
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-ink-300 text-ink-700 rounded-full hover:bg-ink-50 transition-colors font-medium text-sm"
              >
                下载简历
              </a>
            </div>
          </motion.div>

          {/* Right: skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 space-y-5"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={fadeUp}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-medium text-ink-700">{skill.name}</span>
                  <span className="text-xs font-mono text-ink-400">{skill.level}%</span>
                </div>
                <div className="h-1 bg-surface-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-ink-900 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: skill.level / 100 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'left center' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Experience</span>
          <h2 className="font-display text-3xl font-semibold text-ink-900 mt-3 mb-10">
            职业经历
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-surface-300" />
            <div className="space-y-10 pl-8">
              {timeline.map((entry) => (
                <div key={entry.year} className="relative">
                  <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-ink-900 border-2 border-surface-50" />
                  <div className="font-mono text-xs text-primary-600 mb-1">{entry.year}</div>
                  <div className="font-display text-lg font-semibold text-ink-900">{entry.role}</div>
                  <div className="text-ink-400 text-sm mb-1">{entry.org}</div>
                  <p className="text-ink-500 text-sm leading-relaxed">{entry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education + Certifications — 2-column */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Education</span>
            <h2 className="font-display text-2xl font-semibold text-ink-900 mt-3 mb-6">学历背景</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-surface-300 pl-5">
                  <div className="font-medium text-ink-800">{edu.degree}</div>
                  <div className="text-ink-400 text-sm">{edu.school} · {edu.year}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Certifications</span>
            <h2 className="font-display text-2xl font-semibold text-ink-900 mt-3 mb-6">专业认证</h2>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-ink-600 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default About
