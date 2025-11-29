import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Niamh Hawthorne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 md:mb-12 text-center fade-in-up">PORTFOLIO</h1>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="border-[4px] border-[#2e2e2e] p-6 bg-[#E0F2FE] hover:bg-[#FFE5D9] transition-colors fade-in-delay-1">
              <h2 className="text-2xl font-black mb-4">PROJECT TITLE</h2>
              <p className="mb-6">Short description: a one-liner explaining the project (e.g. "Localised AAA game trailer for European markets — multi-language VO, full QC, and platform-specific deliverables.")</p>
              <Link href="/portfolio/project-1" className="btn-3d inline-block px-6 py-2 bg-white font-bold">
                VIEW PROJECT →
              </Link>
            </article>

            <article className="border-[4px] border-[#2e2e2e] p-6 bg-[#FFE5D9] hover:bg-[#FFF9C4] transition-colors fade-in-delay-2">
              <h2 className="text-2xl font-black mb-4">PROJECT TITLE</h2>
              <p className="mb-6">Short description.</p>
              <Link href="/portfolio/project-2" className="btn-3d inline-block px-6 py-2 bg-white font-bold">
                VIEW PROJECT →
              </Link>
            </article>

            <article className="border-[4px] border-[#2e2e2e] p-6 bg-[#FFF9C4] hover:bg-[#E0F2FE] transition-colors fade-in-delay-3">
              <h2 className="text-2xl font-black mb-4">PROJECT TITLE</h2>
              <p className="mb-6">Short description.</p>
              <Link href="/portfolio/project-3" className="btn-3d inline-block px-6 py-2 bg-white font-bold">
                VIEW PROJECT →
              </Link>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

