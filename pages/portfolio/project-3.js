import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Project3() {
  return (
    <>
      <Head>
        <title>Project Title - Niamh Hawthorne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/portfolio" className="inline-block mb-8 font-bold hover:underline">
            ← BACK TO PORTFOLIO
          </Link>

          <h1 className="text-6xl font-black mb-12">PROJECT TITLE</h1>

          <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#FFF9C4] mb-8">
            <p className="text-lg mb-2"><strong>CLIENT:</strong> [Client Name]</p>
            <p className="text-lg"><strong>ROLE:</strong> Producer</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black mb-6">OVERVIEW</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                A short paragraph summarising the project and what made it interesting.
              </p>
              <p>
                Example: "This project involved producing a multi-language localisation of an AAA game trailer for European territories. I managed the VO direction, timelines, QC checks and platform-specific deliverables."
              </p>
            </div>
          </section>

          <section className="border-[4px] border-[#2e2e2e] p-8 bg-[#E0F2FE] mb-12">
            <h2 className="text-3xl font-black mb-6">MY RESPONSIBILITIES</h2>
            <ul className="space-y-3 text-lg">
              <li>• Directed French, German, Italian, Dutch and Portuguese VO sessions</li>
              <li>• Built and managed the production schedule</li>
              <li>• QC'd all video files, ensuring correct graphics, subtitles, and end-slates</li>
              <li>• Delivered all platform-specific versions (TikTok, Meta, TV, Cinema)</li>
            </ul>
          </section>

          <section className="border-[4px] border-[#2e2e2e] p-8 bg-[#FFE5D9]">
            <h2 className="text-3xl font-black mb-6">RESULT</h2>
            <p className="text-lg leading-relaxed">
              Delivered on time, fully approved, and distributed across multiple markets with zero corrections.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

