import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowRight, Briefcase, Building2, Sparkles } from 'lucide-react'

const focusAreas = [
  'XR / VR / AR 技术方案设计与落地实施',
  '虚拟演播室、LED 虚拟制作及广电包装技术支持',
  'AR 实时包装、节目视觉效果制作与系统联调',
  '虚拟系统项目管理、硬件调试、培训及技术服务',
  '品牌直播、论坛会务、赛事转播等场景的虚拟技术应用',
  'AI 数字内容策划、生成与视频制作协同',
]

const experienceGroups = [
  {
    title: '广电媒体与新闻节目虚拟制作',
    entries: [
      'CCTV-2 财经频道：参与频道改版包装、《财智奥运》《两会大数据》《数说财经》等项目的 AR / VR 设计与制作。',
      '湖北卫视：参与频道改版、大屏设计与 VR 演播室改造，完成《长江新闻号》《南水北调特别节目》《防务听涛》等项目的 AR / VR 制作。',
      '广东广播电视台：负责 AR / VR 设计制作、设备调试及安装，涵盖《全球零距离》、广东体育频道、南方卫视《讲开又讲》及新闻栏目虚拟效果服务。',
      '中国气象系统：参与《天气体育》、“全运会”“温网”特别节目及《一周出行参考》演播室相关设计制作与系统支持。',
      '人民解放军影视中心、广东省公安厅、哈尔滨电视台、黑龙江电视台、浙江电视台钱江频道、佛山电视台三水频道、佛山气象局：持续参与节目虚拟设计、包装与演播室相关制作。',
      '香港 TVB、香港凤凰卫视：负责 AR / VR 系统项目管理。',
    ],
  },
  {
    title: '展会、内容包装与创意视觉',
    entries: [
      'Filmarket 展会：参与 AR 系统展示及 Zero Density 虚拟演播室 Demo 展示。',
      '新华社：参与 MG 动画《全国平均身高》及《席菁观察》相关内容制作。',
      '品牌与创意项目：参与奔驰车展提案、互动投影项目研发、川艺傲加人才孵化基地视觉设计，以及乐视欧洲杯虚拟植入提案（AR）。',
    ],
  },
]

const recentHighlights = [
  {
    year: '2021',
    title: '品牌直播与企业大会',
    detail: '担任“小王子与美赞臣”直播项目 VR / XR 技术效果负责人；担任广汽丰田 2020 年度《改善大会》VR / XR 技术效果负责人。',
  },
  {
    year: '2022',
    title: '企业大会与虚拟人直播',
    detail: '担任广汽丰田《经销商大会》、广汽丰田 2022 年度《改善大会》VR / XR 技术效果负责人，以及德宝虚拟人直播项目 VR / XR 技术效果负责人。',
  },
  {
    year: '2023',
    title: '持续服务广汽丰田',
    detail: '担任《改善大会》VR / XR 技术效果负责人。',
  },
  {
    year: '2024',
    title: '大型体育转播',
    detail: '担任广东体育频道《欧洲杯》转播项目 VR / XR 技术效果负责人。',
  },
  {
    year: '2025',
    title: '技术指导、培训与咨询',
    detail: '为北京凤凰卫视、香港中文大学、香港岭南大学、香港政府总部、启德体育城及广州 XR 演播室提供技术指导、培训、咨询与维护服务。',
  },
  {
    year: '2026',
    title: 'AI 数字内容项目',
    detail: '负责民信药业 / 广州中医药大学附属医院 AI 数字吉祥物视频项目策划、AI 内容制作与生成。',
  },
]

const capabilityCards = [
  {
    label: '技术能力',
    text: '具备 XR / VR / AR 技术方案设计、虚拟演播室搭建、LED 虚拟制作、实时包装、系统联调、设备调试与现场实施能力。',
  },
  {
    label: '项目经验',
    text: '具备广电媒体、政府合作项目、高校培训、企业活动、赛事转播及品牌直播等多场景实战经验。',
  },
  {
    label: '组织协调',
    text: '能够承担项目技术负责人、实施负责人或技术顾问角色，统筹方案沟通、执行落地、培训支持与协同配合。',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const About = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Resume</span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-900 mt-3 leading-tight">
            工作履历
          </h1>
          <p className="text-ink-500 mt-6 max-w-3xl leading-relaxed text-lg">
            胡亚崇，XR / VR / AR 技术专家、虚拟制作技术负责人。2012 年至今长期深耕广电节目、
            品牌活动、赛事转播、虚拟演播室及 XR 直播项目，具备从方案设计、视觉包装到系统联调、
            现场实施与项目统筹的完整落地经验。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-[2rem] bg-ink-900 text-white p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-300" />
                </div>
                <div>
                  <div className="text-sm font-mono text-primary-300 uppercase tracking-widest">Profile</div>
                  <div className="font-display text-2xl">职业概述</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-5">
                服务对象覆盖央视、省级卫视、气象系统、公安系统、高校及企业客户，可独立推动虚拟技术方案从创意阶段走向稳定交付。
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="text-xs font-mono text-primary-300 uppercase tracking-widest mb-2">岗位定位</div>
                  <div className="text-base leading-relaxed">XR / VR / AR 技术专家、虚拟制作技术负责人</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-5">
                  <div className="text-xs font-mono text-primary-300 uppercase tracking-widest mb-2">从业时间</div>
                  <div className="text-base leading-relaxed">2012 年至今，10 余年虚拟制作与广电技术实施经验</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-[1.75rem] border border-surface-200 bg-white p-6 hover:bg-surface-50 transition-colors"
            >
              <div>
                <div className="text-sm font-mono text-primary-600 uppercase tracking-widest mb-1">Download</div>
                <div className="font-display text-2xl text-ink-900">下载正式简历 PDF</div>
              </div>
              <ArrowDownToLine className="w-6 h-6 text-ink-700" />
            </a>

            <div className="rounded-[1.75rem] border border-surface-200 bg-surface-50 p-6">
              <div className="text-sm font-mono text-primary-600 uppercase tracking-widest mb-3">Focus</div>
              <div className="space-y-3">
                {focusAreas.slice(0, 4).map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-ink-700 leading-relaxed">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mb-20"
        >
          <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Specialties</span>
          <h2 className="font-display text-3xl font-semibold text-ink-900 mt-3 mb-8">专业方向</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {focusAreas.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="rounded-2xl border border-surface-200 bg-white p-5 text-ink-700 leading-relaxed"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Experience</span>
          <h2 className="font-display text-3xl font-semibold text-ink-900 mt-3 mb-8">主要工作履历</h2>
          <div className="space-y-8">
            {experienceGroups.map((group) => (
              <div key={group.title} className="rounded-[2rem] border border-surface-200 bg-white p-7 md:p-9">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-surface-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-ink-800" />
                  </div>
                  <h3 className="font-display text-2xl text-ink-900">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.entries.map((entry) => (
                    <div key={entry} className="flex gap-3 text-ink-600 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                      <p>{entry}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Highlights</span>
          <h2 className="font-display text-3xl font-semibold text-ink-900 mt-3 mb-8">近年重点项目</h2>
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-surface-300" />
            <div className="space-y-7">
              {recentHighlights.map((entry) => (
                <div key={entry.year} className="relative rounded-[1.5rem] bg-surface-50 p-6 md:p-7">
                  <div className="absolute -left-[1.95rem] top-8 w-3.5 h-3.5 rounded-full bg-ink-900 border-4 border-white" />
                  <div className="font-mono text-xs text-primary-600 mb-2">{entry.year}</div>
                  <div className="font-display text-2xl text-ink-900 mb-2">{entry.title}</div>
                  <p className="text-ink-600 leading-relaxed">{entry.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Capabilities</span>
          <h2 className="font-display text-3xl font-semibold text-ink-900 mt-3 mb-8">综合能力</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {capabilityCards.map((card) => (
              <div key={card.label} className="rounded-[1.75rem] bg-ink-900 text-white p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-5 h-5 text-primary-300" />
                  <div className="font-display text-2xl">{card.label}</div>
                </div>
                <p className="text-white/75 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-4 bg-ink-900 text-white rounded-full hover:bg-ink-700 transition-colors font-medium"
            >
              下载 PDF 简历
              <ArrowDownToLine className="w-4 h-4 ml-2" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-7 py-4 border border-ink-300 text-ink-700 rounded-full hover:bg-ink-50 transition-colors font-medium"
            >
              合作联系
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default About
