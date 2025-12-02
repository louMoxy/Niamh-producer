import Head from 'next/head'
import { useState } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Here you would typically send the form data to your backend
    // For now, we'll use mailto as a fallback
    const mailtoLink = `mailto:niamhhawthorne@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <>
      <Head>
        <title>Contact - Riley Shaw</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 md:mb-12 text-center fade-in-up">LET'S WORK TOGETHER</h1>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Contact Form */}
            <section className="border-[4px] border-[#2e2e2e] p-8 bg-white fade-in-delay-1">
              <h2 className="text-3xl font-black mb-6">SEND A MESSAGE</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-[4px] border-[#2e2e2e] p-3 bg-white focus:outline-none focus:bg-[#E0F2FE] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-bold mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-[4px] border-[#2e2e2e] p-3 bg-white focus:outline-none focus:bg-[#E0F2FE] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-bold mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-[4px] border-[#2e2e2e] p-3 bg-white focus:outline-none focus:bg-[#E0F2FE] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-bold mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full border-[4px] border-[#2e2e2e] p-3 bg-white focus:outline-none focus:bg-[#E0F2FE] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-3d-dark w-full py-4 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE →'}
                </button>

                {submitStatus === 'success' && (
                  <div className="border-[4px] border-[#2e2e2e] p-4 bg-[#FFF9C4]">
                    <p className="font-bold">✓ Message sent! I'll get back to you soon.</p>
                  </div>
                )}
              </form>
            </section>

            {/* Contact Information */}
            <div className="space-y-6">
              <section className="border-[4px] border-[#2e2e2e] p-8 bg-[#FFE5D9] fade-in-delay-2">
                <p className="text-xl mb-6 leading-relaxed">
                  Whether you're planning a trailer, TV spot, branded film or social content series, I'd love to hear about it.
                </p>

                <div className="space-y-4">
                  <div className="border-[4px] border-[#2e2e2e] p-4 bg-white">
                    <p className="text-sm font-bold mb-1">EMAIL</p>
                    <a href="mailto:niamhhawthorne@gmail.com" className="text-lg hover:underline font-semibold">
                      niamhhawthorne@gmail.com
                    </a>
                  </div>

                  <div className="border-[4px] border-[#2e2e2e] p-4 bg-white">
                    <p className="text-sm font-bold mb-1">LOCATION</p>
                    <p className="text-lg font-semibold">UK (remote or on-site)</p>
                  </div>

                  <div className="border-[4px] border-[#2e2e2e] p-4 bg-white">
                    <p className="text-sm font-bold mb-1">AVAILABILITY</p>
                    <p className="text-lg font-semibold">Open to freelance and project-based work</p>
                  </div>
                </div>
              </section>

              <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#E0F2FE]">
                <p className="text-lg leading-relaxed">
                  Or, if you just want advice on timelines, budgets or delivery workflows, feel free to reach out — I'm always happy to help.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
