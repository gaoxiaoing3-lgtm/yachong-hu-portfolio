import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = '请填写姓名'
    if (!formData.email.trim()) newErrors.email = '请填写邮箱'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = '邮箱格式不正确'
    if (!formData.subject.trim()) newErrors.subject = '请填写主题'
    if (!formData.message.trim()) newErrors.message = '请填写消息内容'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: '邮箱',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: '电话',
      value: '+86 138 0000 0000',
      href: 'tel:+8613800000000',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: '服务地区',
      value: '广州 / 香港 / 北京 / 异地协作',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
    },
  ]

  return (
    <div className="section-padding page-shell">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-10"
          >
            <div>
              <span className="eyebrow text-primary-700">Contact</span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 mt-4 leading-tight">
                合作接洽
              </h1>
              <p className="text-ink-700 mt-5 leading-relaxed text-lg">
                如需广电虚拟制作、XR 技术实施、LED 虚拟场景、培训咨询或 AI 数字内容协同支持，欢迎直接联系。
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="lux-card flex items-center gap-4 p-5 hover:bg-[#fcfaf5] transition-colors group"
                >
                  <div className="p-2.5 bg-ink-900 text-white rounded-xl shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-ink-500 mb-1">{info.label}</div>
                    <div className="text-sm text-ink-900 group-hover:text-primary-700 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="lux-card-dark p-6 text-white">
              <div className="eyebrow text-primary-300 mb-4">Response</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/68">工作日</span>
                  <span className="text-white">24 小时内</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/68">周末</span>
                  <span className="text-white">48 小时内</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/68">高优先级项目</span>
                  <span className="text-primary-300">可协商加急</span>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white/8 p-3 hover:bg-white/14 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="lux-card p-12 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="font-display text-3xl text-ink-900 mb-3">消息已发送</h3>
                <p className="text-ink-700">感谢来信，我会尽快回复。</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="lux-card p-8 lg:p-10 space-y-6 bg-[#fcfaf6]">
                <div className="mb-2">
                  <div className="eyebrow text-primary-700">Inquiry Form</div>
                  <h2 className="font-display text-3xl text-ink-900 mt-3">项目咨询表单</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-ink-900 mb-2">
                      姓名 <span className="text-primary-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="您的姓名"
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-ink-900 placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900 ${
                        errors.name ? 'border-red-400' : 'border-[#d9d2c5]'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-ink-900 mb-2">
                      邮箱 <span className="text-primary-700">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 bg-white border rounded-xl text-ink-900 placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900 ${
                        errors.email ? 'border-red-400' : 'border-[#d9d2c5]'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-ink-900 mb-2">
                    主题 <span className="text-primary-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="广电项目 / XR 技术咨询 / 品牌活动 / 其他"
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-ink-900 placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900 ${
                      errors.subject ? 'border-red-400' : 'border-[#d9d2c5]'
                    }`}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-ink-900 mb-2">
                    消息内容 <span className="text-primary-700">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    placeholder="请简要说明项目背景、合作时间、需求方向或希望沟通的内容。"
                    className={`w-full px-4 py-3 bg-white border rounded-xl text-ink-900 placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900 resize-none ${
                      errors.message ? 'border-red-400' : 'border-[#d9d2c5]'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-4 bg-ink-900 text-white rounded-full hover:bg-ink-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '发送中...' : '发送咨询'}
                  {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
