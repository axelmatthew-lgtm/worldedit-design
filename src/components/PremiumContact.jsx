import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, User, MessageSquare, Building, ArrowRight, CheckCircle, Clock, Globe, Shield, Zap } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 0.86, 0.39, 0.96] } }
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

export default function PremiumContact({ accent = '#6366f1', bg = '#0a0a0a', company = '', email = '', phone = '', address = '' }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const set = (field, val) => {
    setForm(p => ({ ...p, [field]: val }))
    if (errors[field]) setErrors(p => ({ ...p, [field]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'At least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1800))
    setSubmitting(false)
    setSubmitted(true)
  }

  const methods = [
    { Icon: Mail, title: 'Email', desc: 'Drop us a line anytime', value: email, href: `mailto:${email}` },
    { Icon: Phone, title: 'Phone', desc: 'Talk to us directly', value: phone, href: `tel:${phone}` },
    { Icon: MapPin, title: 'Location', desc: 'Our headquarters', value: address, href: '#' },
  ]

  const stats = [
    { Icon: Clock, label: 'Response Time', value: '< 2 hrs' },
    { Icon: Globe, label: 'Countries', value: '40+' },
    { Icon: Shield, label: 'Quality', value: 'ISO 9001' },
    { Icon: Zap, label: 'On-Time', value: '99%' },
  ]

  const inputStyle = (hasErr) => ({
    width: '100%',
    padding: '13px 14px 13px 42px',
    background: 'rgba(255,255,255,0.07)',
    border: `1px solid ${hasErr ? '#f87171' : 'rgba(255,255,255,0.13)'}`,
    borderRadius: 12,
    color: '#fff',
    fontSize: 13,
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  })

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      style={{ position: 'relative' }}
    >
      {/* Stats row */}
      <motion.div variants={fadeInUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 32 }}>
        {stats.map(({ Icon, label, value }, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.03 }}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '16px 12px', textAlign: 'center' }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `${accent}22`, border: `1px solid ${accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
              <Icon size={16} color={accent} />
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>

        {/* LEFT — Form */}
        <motion.div variants={fadeInUp}>
          <div style={{ minHeight: 52, marginBottom: 24 }}>
            <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Send a message</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>We reply within 24 hours.</p>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form key="form" onSubmit={submit} exit={{ opacity: 0, y: -16 }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={{ position: 'relative' }}>
                    <User size={15} color="rgba(255,255,255,0.35)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                    <input placeholder="Your Name" value={form.name} onChange={e => set('name', e.target.value)} style={inputStyle(errors.name)} />
                    {errors.name && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.name}</p>}
                  </div>
                  <div style={{ position: 'relative' }}>
                    <Mail size={15} color="rgba(255,255,255,0.35)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                    <input placeholder="Email Address" value={form.email} onChange={e => set('email', e.target.value)} style={inputStyle(errors.email)} />
                    {errors.email && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.email}</p>}
                  </div>
                </div>

                {/* Company */}
                <div style={{ position: 'relative' }}>
                  <Building size={15} color="rgba(255,255,255,0.35)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                  <input placeholder="Company (Optional)" value={form.company} onChange={e => set('company', e.target.value)} style={{ ...inputStyle(false), paddingLeft: 42 }} />
                </div>

                {/* Message */}
                <div style={{ position: 'relative' }}>
                  <MessageSquare size={15} color="rgba(255,255,255,0.35)" style={{ position: 'absolute', left: 14, top: 14 }} />
                  <textarea placeholder="Tell us about your project..." rows={4} value={form.message} onChange={e => set('message', e.target.value)}
                    style={{ ...inputStyle(errors.message), paddingTop: 13, paddingBottom: 13, resize: 'none', verticalAlign: 'top' }} />
                  {errors.message && <p style={{ fontSize: 11, color: '#f87171', marginTop: 4 }}>{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accent}bb)`, border: 'none', borderRadius: 12, padding: '13px 20px', color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: 'inherit', cursor: submitting ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }} />
                  ) : (
                    <><Send size={14} />Send Message<ArrowRight size={13} /></>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '40px 0' }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={32} color="#4ade80" />
                </motion.div>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Message Sent!</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>We'll get back to you within 24 hours.</p>
                <motion.button whileHover={{ scale: 1.04 }} onClick={() => { setSubmitted(false); setForm({ name:'', email:'', company:'', message:'' }) }}
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '10px 20px', color: '#fff', fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}>
                  Send Another
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* RIGHT — Contact methods */}
        <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ minHeight: 52, marginBottom: 24 }}>
            <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Other ways to reach us</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>Choose what works best for you.</p>
          </div>

          {methods.map(({ Icon, title, desc, value, href }, i) => (
            <motion.a
              key={i}
              href={href}
              whileHover={{ scale: 1.02, y: -2 }}
              style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, textDecoration: 'none', color: '#fff' }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `${accent}20`, border: `1px solid ${accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={20} color={accent} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: '#fff', marginBottom: 2 }}>{title}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{desc}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
              </div>
              <ArrowRight size={16} color="rgba(255,255,255,0.3)" />
            </motion.a>
          ))}

          {/* Response guarantee */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            style={{ padding: '20px', background: `linear-gradient(135deg, ${accent}12, ${accent}06)`, border: `1px solid ${accent}30`, borderRadius: 16, marginTop: 4 }}
          >
            <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Quick Response Guarantee</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              All inquiries are answered within 2 hours during business hours. We'll schedule a call within 24 hours to discuss your project in detail.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  )
}
