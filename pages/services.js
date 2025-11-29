import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Niamh Hawthorne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-center fade-in-up">WHAT I OFFER</h1>

          <p className="text-xl text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Whether you need a full production lead, a project rescue mission, or someone to handle the million little details no one else wants to touch, I can help with:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#E0F2FE] fade-in-delay-1">
              <h2 className="text-2xl font-black mb-4">PRODUCTION MANAGEMENT</h2>
              <ul className="space-y-2">
                <li>• Schedules, timelines, workflows</li>
                <li>• Organising teams and freelancers</li>
                <li>• Keeping everything moving and everyone updated</li>
              </ul>
            </section>

            <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#FFE5D9] fade-in-delay-2">
              <h2 className="text-2xl font-black mb-4">BUDGETING & FORECASTING</h2>
              <ul className="space-y-2">
                <li>• First draft budgets</li>
                <li>• Final budgets</li>
                <li>• Clear breakdowns (no financial mysteries)</li>
              </ul>
            </section>

            <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#FFF9C4] fade-in-delay-3">
              <h2 className="text-2xl font-black mb-4">LOCALISATION PRODUCTION</h2>
              <ul className="space-y-2">
                <li>• Managing multilingual VO</li>
                <li>• Coordinating translated scripts</li>
                <li>• Ensuring platform-perfect deliverables</li>
                <li>• Cross-checking subtitles, graphics, and audio</li>
              </ul>
            </section>

            <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#E0F2FE] fade-in-delay-1">
              <h2 className="text-2xl font-black mb-4">VIDEO QC & DELIVERY</h2>
              <ul className="space-y-2">
                <li>• Frame-by-frame checks</li>
                <li>• Platform-specific versions (1x1, 9x16, 16x9)</li>
                <li>• Broadcast compliance</li>
                <li>• Cinema clearance (BBFC, CAA)</li>
              </ul>
            </section>

            <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#FFE5D9] fade-in-delay-2">
              <h2 className="text-2xl font-black mb-4">SOCIAL CONTENT PRODUCTION</h2>
              <ul className="space-y-2">
                <li>• Travel content</li>
                <li>• Short-form storytelling</li>
                <li>• TikTok/Meta-first visuals</li>
              </ul>
            </section>

            <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#FFF9C4] fade-in-delay-3">
              <h2 className="text-2xl font-black mb-4">CREATIVE COORDINATION</h2>
              <ul className="space-y-2">
                <li>• Working with editors and designers</li>
                <li>• Organising assets, feedback, and approvals</li>
                <li>• Ensuring work is polished and on-brand</li>
              </ul>
            </section>
          </div>

          <section className="text-center border-[4px] border-[#2e2e2e] p-8 bg-[#E0F2FE] max-w-3xl mx-auto">
            <p className="text-xl mb-6">
              If you're not sure what you need yet, just ask. Most projects begin with a conversation.
            </p>
            <Link href="/contact" className="btn-3d-dark inline-block px-8 py-4 font-bold">
              GET IN TOUCH →
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

