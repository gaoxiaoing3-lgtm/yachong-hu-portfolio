import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const tools = [
  {
    category: '实时渲染',
    items: ['Unreal Engine 5', 'Unity 2023', 'D5 Render', 'Notch'],
  },
  {
    category: '3D 与动画',
    items: ['Blender', 'Maya', 'Cinema 4D', 'Houdini'],
  },
  {
    category: 'AIGC 工作流',
    items: ['Stable Diffusion', 'ComfyUI', 'ControlNet', 'GPT-4V API'],
  },
  {
    category: '视觉编程',
    items: ['TouchDesigner', 'Processing', 'openFrameworks', 'VDMX'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function StockTracker() {
  return (
    <section className="section-padding bg-surface-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Stack</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 mt-3">
            技术栈
          </h2>
          <p className="text-ink-500 mt-3 max-w-xl">
            长期使用并持续深入的技术工具，涵盖实时渲染、3D创作、AI生成与视觉编程。
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {tools.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-surface-200"
            >
              <div className="text-xs font-mono text-primary-600 uppercase tracking-widest mb-4">
                {group.category}
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-700 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
