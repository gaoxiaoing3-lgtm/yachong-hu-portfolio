import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Flame, Bone, Eye, Waves, KeyRound, Compass, Sparkles, Sword, CheckCircle2 } from 'lucide-react'

const stats = [
  { key: '护阳', name: '生命力', value: 62, stars: '★★★☆☆', icon: Flame, note: '精气神 / 欲望管理' },
  { key: '炼骨', name: '耐力', value: 82, stars: '★★★★☆', icon: Bone, note: '枯燥任务持续推进' },
  { key: '铸魂', name: '志气', value: 68, stars: '★★★☆☆', icon: Sword, note: '责任 / 荣誉 / 主心骨' },
  { key: '开眼', name: '洞察', value: 74, stars: '★★★★☆', icon: Eye, note: '看清规则与结构' },
  { key: '定心', name: '心境', value: 78, stars: '★★★★☆', icon: Waves, note: '收束精力，不硬耗' },
  { key: '破局', name: '行动', value: 96, stars: '★★★★★', icon: KeyRound, note: '把混乱拆成流程' },
  { key: '藏器', name: '实力', value: 76, stars: '★★★★☆', icon: Sparkles, note: '网站 / GitHub / 引擎' },
  { key: '择道', name: '命途', value: 80, stars: '★★★★☆', icon: Compass, note: '虚拟制作 + AIGC' },
  { key: '守门', name: '边界', value: 86, stars: '★★★★☆', icon: Shield, note: '财务防错 / 风险防守' },
]

const tasks = [
  { title: '报销提交前复核', type: '破局 + 守门', state: '进行中', stars: '★★★★★' },
  { title: 'OPLUS 渲染引擎', type: '择道 + 藏器', state: '今日主线', stars: '★★★★☆' },
  { title: '无敌心法角色面板', type: '藏器 + 破局', state: 'MVP', stars: '★★★★☆' },
]

const breakthroughs = [
  '从抗拒半年报销，到完成表格、142 个文件上传与提交前复核。',
  '从“技术负责人”校准为“虚拟制作与 AI 数字内容解决方案实践者”。',
  '把微信对话、提醒、记忆系统接成本地成长反馈闭环。',
]

const WudiPanel = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#05080e] text-white">
      <section className="relative min-h-[calc(100svh-4rem)] px-6 py-10 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(178,164,108,0.2),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(120,170,210,0.16),transparent_26%),linear-gradient(180deg,#05080e_0%,#0a1018_58%,#05080e_100%)]" />
        <div className="absolute inset-x-0 top-32 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

        <div className="relative mx-auto grid max-w-8xl gap-8 lg:grid-cols-[0.82fr_1.18fr_0.8fr]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[72vh] flex-col justify-between rounded-[2rem] border border-white/12 bg-white/[0.055] p-7 backdrop-blur-2xl"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-white/46">Character Panel</div>
              <h1 className="mt-5 font-display text-5xl leading-none md:text-6xl">无敌心法</h1>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">把每天的工作、家庭、情绪与行动，转化为九大底层能力的成长记录。</p>
            </div>

            <div className="relative my-10 aspect-square rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_34%,transparent_66%)]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-dashed border-[#d7c37a]/35"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <Shield className="mb-4 h-10 w-10 text-[#d7c37a]" />
                <div className="font-display text-3xl">当前境界</div>
                <div className="mt-2 font-mono text-sm text-[#d7c37a]">破局 · 五星</div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="text-sm text-white/48">今日主线</div>
              <div className="mt-2 text-xl">先清债，再造器</div>
            </div>
          </motion.aside>

          <main className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="pt-4"
            >
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#d7c37a]">Nine Core Attributes</div>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-6xl">把抽象心法，变成可看见的角色属性。</h2>
            </motion.div>

            <div className="grid gap-3 md:grid-cols-3">
              {stats.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group border-b border-white/10 py-5 transition-colors hover:border-[#d7c37a]/50"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-white/52 group-hover:text-[#d7c37a]" />
                        <div>
                          <div className="text-lg">{item.key} · {item.name}</div>
                          <div className="text-xs text-white/42">{item.note}</div>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-[#d7c37a]">{item.stars}</div>
                    </div>
                    <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ delay: 0.25 + index * 0.04, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-[#d7c37a] to-white/70"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </main>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 rounded-[2rem] border border-white/12 bg-black/20 p-7 backdrop-blur-2xl"
          >
            <section>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-white/42">Today Quests</div>
              <div className="mt-5 space-y-5">
                {tasks.map((task) => (
                  <div key={task.title} className="border-b border-white/10 pb-5 last:border-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-lg">{task.title}</div>
                        <div className="mt-1 text-xs text-white/42">{task.type}</div>
                      </div>
                      <div className="rounded-full border border-[#d7c37a]/30 px-3 py-1 text-xs text-[#d7c37a]">{task.state}</div>
                    </div>
                    <div className="mt-3 font-mono text-xs text-white/58">{task.stars}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-white/42">Breakthrough Log</div>
              <div className="mt-5 space-y-4">
                {breakthroughs.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-white/62">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#d7c37a]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </motion.aside>
        </div>
      </section>
    </div>
  )
}

export default WudiPanel
