import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Project3() {
  return (
    <>
      <Head>
        <title>Social-First Travel Series - Riley Shaw</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/portfolio" className="inline-block mb-8 font-bold hover:underline">
            ← BACK TO PORTFOLIO
          </Link>

        <h1 className="text-6xl font-black mb-12">SOCIAL-FIRST TRAVEL SERIES</h1>

          <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#FFF9C4] mb-8">
            <p className="text-lg mb-2"><strong>CLIENT:</strong> [Travel Brand]</p>
            <p className="text-lg"><strong>ROLE:</strong> Series Producer</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black mb-6">OVERVIEW</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                This project involved producing a social-first travel series for TikTok and Meta, showcasing multiple destinations in
                short, energetic episodes.
              </p>
              <p>
                I oversaw content planning, vertical-first edits, subtitles and delivery workflows to keep the series on schedule and
                optimised for each platform.
              </p>
            </div>
          </section>

          <section className="border-[4px] border-[#2e2e2e] p-8 bg-[#E0F2FE] mb-12">
            <h2 className="text-3xl font-black mb-6">MY RESPONSIBILITIES</h2>
            <ul className="space-y-3 text-lg">
              <li>• Structured the episode roadmap and production schedule</li>
              <li>• Coordinated editors for multiple aspect ratios and durations</li>
              <li>• Managed subtitles, graphics, and platform-specific safe zones</li>
              <li>• Oversaw QC for exports across TikTok, Reels and YouTube Shorts</li>
            </ul>
          </section>

          <section className="border-[4px] border-[#2e2e2e] p-8 bg-[#FFE5D9]">
            <h2 className="text-3xl font-black mb-6">RESULT</h2>
            <p className="text-lg leading-relaxed">
              Consistent weekly releases with strong engagement and smooth approvals across all social platforms.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

