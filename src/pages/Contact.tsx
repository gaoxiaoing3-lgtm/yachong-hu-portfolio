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

    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1500))

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
      label: '地址',
      value: '北京市朝阳区',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com',
      username: '@yachonghu',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      username: '胡亚崇',
    },
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: header + info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-10"
          >
            <div>
              <span className="font-mono text-sm text-primary-600 tracking-widest uppercase">Contact</span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 mt-3 leading-tight">
                合作接洽
              </h1>
              <p className="text-ink-500 mt-4 leading-relaxed">
                有虚拟制作、舞美预演或AIGC工具开发需求，欢迎联系。
                可提供初步技术评估与报价参考。
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-100 hover:bg-surface-200 transition-colors group"
                >
                  <div className="p-2 bg-ink-900 text-white rounded-lg shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-ink-400 mb-0.5">{info.label}</div>
                    <div className="text-sm font-medium text-ink-700 group-hover:text-primary-600 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <div className="text-sm font-mono text-ink-400 mb-3 uppercase tracking-widest">社交</div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-surface-100 rounded-xl hover:bg-ink-900 hover:text-white transition-all group"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="p-5 rounded-xl bg-ink-900 text-white">
              <div className="text-xs font-mono text-primary-400 uppercase tracking-widest mb-3">响应时间</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-400">工作日</span>
                  <span className="text-white font-medium">24小时内</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-400">周末</span>
                  <span className="text-white font-medium">48小时内</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-400">紧急项目</span>
                  <span className="text-primary-400 font-medium">可协商</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
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
                className="bg-surface-100 rounded-2xl p-12 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink-900 mb-3">
                  消息已发送
                </h3>
                <p className="text-ink-500">
                  感谢来信，我会尽快回复。
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-surface-100 rounded-2xl p-8 lg:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink-700 mb-2">
                      姓名 <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="您的姓名"
                      className={`w-full px-4 py-3 bg-white border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900 ${
                        errors.name ? 'border-red-400' : 'border-surface-200'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-2">
                      邮箱 <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 bg-white border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900 ${
                        errors.email ? 'border-red-400' : 'border-surface-200'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink-700 mb-2">
                    主题 <span className="text-primary-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="项目合作 / 技术咨询 / 其他"
                    className={`w-full px-4 py-3 bg-white border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900 ${
                      errors.subject ? 'border-red-400' : 'border-surface-200'
                    }`}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-2">
                    消息内容 <span className="text-primary-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="请描述您的项目需求或问题..."
                    className={`w-full px-4 py-3 bg-white border rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900 resize-none ${
                      errors.message ? 'border-red-400' : 'border-surface-200'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-ink-900 text-white rounded-xl hover:bg-ink-700 transition-colors font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                      发送中...
                    </>
                  ) : (
                    <>
                      发送消息
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
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
