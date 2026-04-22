import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Building2, Download, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const specialties = [
  {
    title: 'XR / 虚拟演播室',
    text: '面向广电、论坛会务、品牌发布与活动直播场景，提供 XR、虚拟演播室与 LED 虚拟制作整体技术方案。',
  },
  {
    title: '广电包装与实时图形',
    text: '覆盖 AR 实时包装、节目视觉效果、演播室联调与系统实施，兼顾视觉表达与工程稳定性。',
  },
  {
    title: '项目落地与技术统筹',
    text: '从前期测试、设备调试到现场执行与培训支持，推动虚拟技术方案在真实场景中高质量交付。',
  },
  {
    title: 'AI 数字内容协同',
    text: '结合虚拟制作流程，参与 AI 数字内容策划、生成与视频项目协同，扩展新型内容生产能力。',
  },
]

const projects = [
  {
    year: '2026',
    title: 'AI 数字吉祥物视频项目',
    client: '民信药业 / 广州中医药大学附属医院',
    text: '负责项目策划、AI 内容制作与生成，推进数字内容表达与项目落地。',
  },
  {
    year: '2025',
    title: '技术指导、培训与咨询',
    client: '北京凤凰卫视 / 香港中文大学 / 香港岭南大学 / 香港政府总部',
    text: '提供 XR / LED 扩展现实、硬件维护、培训指导与高规格虚拟技术咨询服务。',
  },
  {
    year: '2024',
    title: '广东体育频道《欧洲杯》转播',
    client: '广东体育频道',
    text: '担任 VR / XR 技术效果负责人，服务大型体育转播虚拟技术实施。',
  },
  {
    year: '2022-2023',
    title: '企业大会与虚拟人直播',
    client: '广汽丰田 / 德宝',
    text: '负责经销商大会、改善大会与虚拟人直播项目的 VR / XR 技术效果统筹与执行。',
  },
]

const metrics = [
  { label: '从业起点', value: '2012' },
  { label: '核心方向', value: 'XR / 广电' },
  { label: '项目类型', value: '直播 / 演播室 / 包装' },
]

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const Home = () => {
  return (
    <div className="h-[calc(100dvh-4rem)] snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <section className="relative min-h-[calc(100dvh-4rem)] snap-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/home-hero-stage.png"
            alt="XR 虚拟演播室背景"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,10,16,0.94)_0%,rgba(6,10,16,0.84)_34%,rgba(6,10,16,0.46)_64%,rgba(6,10,16,0.24)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,16,0.28)_0%,rgba(6,10,16,0.18)_22%,rgba(6,10,16,0.38)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_28%)]" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100dvh-4rem)] items-center section-padding">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              animate="show"
              variants={sectionReveal}
              className="max-w-4xl rounded-[2.5rem] border border-white/12 bg-[linear-gradient(180deg,rgba(4,8,14,0.72)_0%,rgba(7,11,18,0.62)_46%,rgba(8,12,19,0.68)_100%)] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-10 md:py-10"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/26 px-4 py-2 text-sm text-white font-ui backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.24)] [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
                <span className="h-2 w-2 rounded-full bg-primary-400" />
                XR / VR / AR 技术专家
              </div>

              <div className="mt-7 inline-flex max-w-full px-1 py-1">
                <img
                  src="/logo-wordmark.svg"
                  alt="HUYACHONG"
                  className="logo-adaptive h-auto w-[min(30rem,70vw)]"
                />
              </div>

              <h1 className="mt-8 font-display text-[3rem] font-semibold leading-[0.98] tracking-[0.015em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] md:text-[4.5rem] xl:text-[5.4rem]">
                胡亚崇
                <br />
                虚拟制作
                <br />
                技术负责人
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white md:text-xl [text-shadow:0_2px_14px_rgba(0,0,0,0.48)]">
                长期服务于广电节目、品牌活动、赛事转播与 XR 直播项目，
                聚焦虚拟演播室、AR 包装、LED 虚拟制作、系统联调与现场技术落地。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['XR / VR / AR', '虚拟演播室', '广电与直播技术', 'LED 虚拟制作'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/28 bg-black/34 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm shadow-[0_6px_18px_rgba(0,0,0,0.24)] font-ui [text-shadow:0_1px_10px_rgba(0,0,0,0.36)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-medium text-ink-900 transition-colors hover:bg-surface-100 font-ui"
                >
                  查看履历
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10 font-ui"
                >
                  作品集
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="min-h-[calc(100dvh-4rem)] snap-start bg-ink-900 text-white section-padding flex items-center">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={sectionReveal}
            className="grid gap-12 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-4">
                <span className="font-ui text-sm uppercase tracking-[0.24em] text-primary-300">Specialties</span>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
                专业方向
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/68">
                从广电级演播室到品牌直播现场，长期聚焦虚拟技术的方案、实施与交付。
              </p>
            </div>

            <div className="lg:col-span-8 grid gap-5 md:grid-cols-2">
              {specialties.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                      <Sparkles className="h-5 w-5 text-primary-300" />
                    </div>
                    <h3 className="font-display text-2xl">{item.title}</h3>
                  </div>
                  <p className="leading-relaxed text-white/68">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="min-h-[calc(100dvh-4rem)] snap-start bg-surface-50 section-padding flex items-center">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={sectionReveal}
            className="grid gap-10 xl:grid-cols-12 xl:items-start"
          >
            <div className="xl:col-span-4">
              <span className="font-mono text-sm uppercase tracking-[0.28em] text-primary-600">Selected Work</span>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ink-900 md:text-5xl">
                代表项目
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                近年持续服务于广电转播、企业大会、培训咨询与 AI 数字内容项目。
              </p>
              <div className="mt-8 space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-surface-200 bg-white px-5 py-4">
                    <div className="font-ui text-xs uppercase tracking-[0.16em] text-primary-600">{metric.label}</div>
                    <div className="mt-2 text-lg font-semibold text-ink-900">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:col-span-8 grid gap-5">
              {projects.map((project) => (
                <div
                  key={`${project.year}-${project.title}`}
                  className="grid gap-5 rounded-[2rem] border border-surface-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] md:grid-cols-[120px_1fr]"
                >
                  <div className="rounded-2xl bg-ink-900 px-4 py-5 text-center text-white">
                    <div className="font-ui text-xs uppercase tracking-[0.2em] text-primary-300">Year</div>
                    <div className="mt-3 font-display text-3xl">{project.year}</div>
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface-100 px-3 py-1 text-xs font-ui uppercase tracking-[0.16em] text-ink-500">
                        <Building2 className="h-3.5 w-3.5" />
                        {project.client}
                      </div>
                      <h3 className="font-display text-2xl text-ink-900 md:text-3xl">{project.title}</h3>
                      <p className="mt-3 leading-relaxed text-ink-500">{project.text}</p>
                    </div>
                    <Link
                      to="/about"
                      className="inline-flex items-center text-sm font-medium text-ink-900 transition-colors hover:text-primary-600"
                    >
                      查看完整履历
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="min-h-[calc(100dvh-4rem)] snap-start bg-[linear-gradient(180deg,#f8fafc_0%,#e5e7eb_100%)] section-padding flex items-center">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={sectionReveal}
            className="rounded-[2.75rem] bg-ink-900 px-8 py-10 text-white md:px-12 md:py-14 xl:px-16 xl:py-16"
          >
            <div className="grid gap-10 xl:grid-cols-[1.4fr_0.9fr] xl:items-end">
              <div>
                <span className="font-ui text-sm uppercase tracking-[0.24em] text-primary-300">Connect</span>
                <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl xl:text-6xl">
                  为高规格项目
                  <br />
                  提供稳定的虚拟技术支持
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                  适合广电栏目、品牌发布会、企业活动、赛事直播、教学培训与虚拟空间实施项目。
                  如需履历、项目沟通或技术咨询，可从这里继续查看。
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-between rounded-[1.75rem] bg-white px-6 py-5 text-ink-900 transition-colors hover:bg-surface-100"
                >
                  <div>
                    <div className="font-ui text-xs uppercase tracking-[0.16em] text-primary-600">Contact</div>
                    <div className="mt-1 text-xl font-semibold">合作接洽</div>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-[1.75rem] border border-white/12 bg-white/6 px-6 py-5 text-white transition-colors hover:bg-white/10"
                >
                  <div>
                    <div className="font-ui text-xs uppercase tracking-[0.16em] text-primary-300">Resume</div>
                    <div className="mt-1 text-xl font-semibold">下载 PDF 简历</div>
                  </div>
                  <Download className="h-5 w-5" />
                </a>

                <Link
                  to="/portfolio"
                  className="flex items-center justify-between rounded-[1.75rem] border border-white/12 bg-transparent px-6 py-5 text-white transition-colors hover:bg-white/6"
                >
                  <div>
                    <div className="font-ui text-xs uppercase tracking-[0.16em] text-primary-300">Portfolio</div>
                    <div className="mt-1 text-xl font-semibold">查看作品集</div>
                  </div>
                  <Briefcase className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
