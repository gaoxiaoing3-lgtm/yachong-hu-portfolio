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

const heroQuickLinks = ['XR / VR / AR', '虚拟演播室', '广电与直播技术', 'LED 虚拟制作']

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

const Home = () => {
  return (
    <div className="h-[calc(100dvh-4rem)] snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <section className="relative min-h-[calc(100dvh-4rem)] snap-start overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#020308_0%,#070912_52%,#090c18_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(58,74,126,0.16)_0%,transparent_24%),radial-gradient(circle_at_82%_18%,rgba(46,54,112,0.12)_0%,transparent_22%),radial-gradient(circle_at_50%_88%,rgba(96,88,168,0.08)_0%,transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015)_0%,transparent_42%,rgba(255,255,255,0.02)_74%,rgba(255,255,255,0.03)_100%)]" />
          <div className="absolute left-[-8%] top-[18%] h-72 w-72 rounded-full bg-[#1b1656]/42 blur-3xl" />
          <div className="absolute right-[-10%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-[#120f46]/48 blur-3xl" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100dvh-4rem)] items-center section-padding">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              animate="show"
              variants={sectionReveal}
              className="mx-auto max-w-[1600px]"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,10,18,0.76)_0%,rgba(10,12,20,0.82)_100%)] shadow-[0_28px_80px_rgba(0,0,0,0.32)] min-h-[42rem]">
                <img
                  src="/home-hero-3d-ui.png"
                  alt="HUYACHONG 3D UI hero reference"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.24] mix-blend-screen"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,16,0.84)_0%,rgba(7,9,16,0.76)_28%,rgba(7,9,16,0.52)_48%,rgba(7,9,16,0.34)_68%,rgba(7,9,16,0.46)_100%)]" />
                <div className="relative z-10 grid min-h-[42rem] items-center gap-8 px-10 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-14 lg:py-14">
                  <div className="max-w-xl">
                    <div className="font-ui text-[0.7rem] uppercase tracking-[0.38em] text-white/55">
                      TECHNICAL CREATIVE PORTFOLIO
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <img
                        src="/logo-wordmark.svg"
                        alt="HUYACHONG"
                        className="logo-adaptive h-auto w-[min(30rem,72vw)] opacity-90"
                      />
                      <div className="rounded-full border border-white/12 bg-white/6 px-5 py-2 text-sm text-white/76 backdrop-blur-md font-ui">
                        XR / VR / AR 专家
                      </div>
                    </div>

                    <div className="mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#cbbcff] to-transparent shadow-[0_0_18px_rgba(182,168,255,0.65)]" />

                    <h1 className="mt-6 font-display text-[3.35rem] font-semibold leading-[0.94] tracking-[0.01em] text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.46)] md:text-[4.7rem] xl:text-[5.6rem]">
                      虚拟空间构建
                      <br />
                      技术负责人
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
                      长期服务于广电节目、品牌活动、赛事转播与 XR 直播项目，聚焦虚拟演播室、AR 包装、LED 虚拟制作、系统联调与现场技术落地。
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {heroQuickLinks.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/12 bg-black/22 px-4 py-2 text-sm text-white/78 backdrop-blur-md font-ui"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center rounded-full bg-[linear-gradient(180deg,#e8e5ff_0%,#bcb1ff_100%)] px-8 py-4 text-base font-medium text-[#131523] shadow-[0_10px_28px_rgba(156,141,255,0.34)] transition-transform hover:-translate-y-0.5 font-ui"
                      >
                        查看作品集
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <Link
                        to="/about"
                        className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-8 py-4 text-base font-medium text-white/82 backdrop-blur-md transition-transform hover:-translate-y-0.5 font-ui"
                      >
                        了解更多
                      </Link>
                    </div>
                  </div>

                  <div className="relative min-h-[28rem] lg:min-h-[34rem]">
                    <div className="absolute left-[6%] top-[4%] h-[15.8rem] w-[42%] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(23,27,45,0.94)_0%,rgba(15,18,30,0.94)_100%)] shadow-[0_24px_54px_rgba(0,0,0,0.3)]" />
                    <div className="absolute left-[10%] top-[8%] h-[9.2rem] w-[34%] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[radial-gradient(circle_at_50%_40%,rgba(116,111,255,0.95)_0%,rgba(39,47,107,0.8)_36%,rgba(15,17,30,0.96)_72%)]">
                      <div className="absolute inset-x-[12%] top-[18%] h-[2px] bg-gradient-to-r from-transparent via-[#c3b6ff] to-transparent" />
                      <div className="absolute inset-x-[18%] top-[34%] h-14 rounded-full border border-[#8d83ff]/40" />
                      <div className="absolute inset-x-[24%] top-[44%] h-10 rounded-full border border-[#8d83ff]/30" />
                      <div className="absolute inset-x-[20%] bottom-[22%] h-8 rounded-full border border-[#8d83ff]/25" />
                    </div>
                    <div className="absolute left-[40%] top-[4%] h-[15.8rem] w-[18%] rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(27,31,49,0.96)_0%,rgba(16,18,28,0.96)_100%)] shadow-[0_24px_54px_rgba(0,0,0,0.3)]" />
                    <div className="absolute left-[44%] top-[10%] h-[2px] w-[8%] rounded-full bg-[#bcb1ff] shadow-[0_0_16px_rgba(188,177,255,0.8)]" />
                    <div className="absolute left-[44%] top-[14%] h-[2px] w-[8%] rounded-full bg-[#bcb1ff] shadow-[0_0_16px_rgba(188,177,255,0.8)]" />
                    <div className="absolute left-[44%] top-[18%] h-[2px] w-[8%] rounded-full bg-[#bcb1ff] shadow-[0_0_16px_rgba(188,177,255,0.8)]" />
                    <div className="absolute left-[43.2%] top-[25%] flex h-[5.8rem] w-[10%] items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(34,37,55,0.98)_0%,rgba(18,20,30,0.98)_100%)] shadow-[0_18px_34px_rgba(0,0,0,0.28)]">
                      <div className="h-[4rem] w-[4rem] rounded-full border border-white/16 bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.8)_0%,rgba(139,137,153,0.26)_24%,rgba(71,75,93,0.9)_68%,rgba(22,23,32,1)_100%)] shadow-[0_0_16px_rgba(191,181,255,0.4)]" />
                    </div>
                    <div className="absolute right-[0%] top-[2%] h-[9rem] w-[42%] rounded-[1.7rem] border border-white/12 bg-[linear-gradient(180deg,rgba(29,32,45,0.92)_0%,rgba(17,19,28,0.92)_100%)] shadow-[0_20px_44px_rgba(0,0,0,0.28)] p-5">
                      <div className="font-ui text-[0.72rem] uppercase tracking-[0.18em] text-white/56">System Status</div>
                      <div className="mt-5 grid grid-cols-3 gap-4 text-white/78">
                        <div><div className="text-[0.72rem] text-white/40">Render</div><div className="mt-2 text-3xl">12</div></div>
                        <div><div className="text-[0.72rem] text-white/40">Tracking</div><div className="mt-2 text-3xl">98%</div></div>
                        <div><div className="text-[0.72rem] text-white/40">Stream</div><div className="mt-2 text-3xl">2.36</div></div>
                      </div>
                    </div>
                    <div className="absolute left-[0%] top-[56%] h-[9.5rem] w-[24%] rounded-[1.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(25,28,40,0.92)_0%,rgba(15,17,26,0.92)_100%)] shadow-[0_18px_42px_rgba(0,0,0,0.24)] p-4" />
                    <div className="absolute left-[5%] top-[63%] h-[2px] w-[10%] rounded-full bg-[#c6baff]" />
                    <div className="absolute left-[28%] top-[58%] h-[9.5rem] w-[28%] rounded-[1.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(25,28,40,0.92)_0%,rgba(15,17,26,0.92)_100%)] shadow-[0_18px_42px_rgba(0,0,0,0.24)] p-4" />
                    <div className="absolute right-[0%] top-[43%] h-[14rem] w-[26%] rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(25,28,40,0.92)_0%,rgba(13,15,24,0.92)_100%)] shadow-[0_20px_46px_rgba(0,0,0,0.28)]" />
                    <div className="absolute right-[4%] top-[51%] h-[5rem] w-[18%] bg-[radial-gradient(circle_at_center,rgba(194,188,255,0.5)_0%,transparent_60%)] blur-2xl" />
                    <div className="absolute left-[46%] bottom-[9%] h-[5.3rem] w-[40%] rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(31,34,49,0.94)_0%,rgba(18,20,31,0.94)_100%)] shadow-[0_24px_50px_rgba(0,0,0,0.28)]" />
                    <div className="absolute left-[50%] bottom-[12%] h-[2.6rem] w-[8%] rounded-xl border border-white/10 bg-white/4" />
                    <div className="absolute left-[60%] bottom-[12%] h-[2.6rem] w-[8%] rounded-xl border border-white/10 bg-white/4" />
                    <div className="absolute left-[70%] bottom-[11.5%] flex h-[3.2rem] w-[9%] items-center justify-center rounded-full border border-[#b9aeff]/30 bg-[radial-gradient(circle,rgba(188,177,255,0.78)_0%,rgba(80,79,171,0.34)_32%,rgba(24,25,36,0.94)_76%)] shadow-[0_0_20px_rgba(188,177,255,0.34)]" />
                    <div className="absolute right-[6%] bottom-[11.5%] flex h-[3.2rem] w-[9%] items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(31,34,49,0.94)_0%,rgba(18,20,31,0.94)_100%)]">
                      <div className="h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-[#8b82ff] border-t-transparent ml-1" />
                    </div>
                    <div className="absolute left-[9%] bottom-[3%] h-5 w-[24%] rounded-full bg-white/6 blur-xl" />
                  </div>
                </div>
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
