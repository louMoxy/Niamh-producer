import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Niamh Hawthorne - Producer & Creative Problem-Solver</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#FFE5D9] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <span className="inline-block px-6 py-2 bg-[#FFF9C4] border-[4px] border-[#2e2e2e] rounded-full text-sm font-bold mb-6 fade-in">
                  PRODUCER
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight fade-in-delay-1">
                  THE CREATIVE<br />PRODUCTION<br />CRAFTER
                </h1>
                <p className="text-lg mb-8 max-w-lg fade-in-delay-2">
                  Bringing stories to life across TV, cinema, game trailers, and social content. Organised, calm, and slightly obsessed with a tidy delivery sheet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-3">
                  <Link href="/portfolio" className="btn-3d px-6 sm:px-8 py-4 bg-white font-bold inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                    VIEW MY WORK
                    <span>→</span>
                  </Link>
                  <Link href="/contact" className="btn-3d px-6 sm:px-8 py-4 bg-white font-bold text-sm sm:text-base text-center">
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
              <div className="relative fade-in-delay-2">
                <div className="bg-[#E0F2FE] border-[4px] border-[#2e2e2e] p-8 transform rotate-2">
                  <div className="bg-white border-[4px] border-[#2e2e2e] p-6 transform -rotate-1">
                    <div className="aspect-square bg-gray-200 border-[4px] border-[#2e2e2e]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Intro */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6 fade-in-up">I'M NIAMH</h2>
            <p className="text-xl leading-relaxed fade-in-delay-1">
              A producer who loves making things run smoothly, look brilliant, and land perfectly across every platform. From AAA video game trailers to TV commercials, localisation projects and travel content, I've produced work across Europe for screens big and small.
            </p>
          </div>
        </section>

        {/* Portfolio Highlight Grid */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white bg-grid-pattern">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border-[4px] border-[#2e2e2e] p-6 mb-8 inline-block mx-auto">
              <h2 className="text-4xl font-black text-center">PORTFOLIO HIGHLIGHTS</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10">
              <article className="border-[4px] border-[#2e2e2e] p-6 bg-white hover:bg-[#E0F2FE] transition-colors fade-in-delay-1">
                <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                <p className="mb-6">Short description: a one-liner explaining the project (e.g. "Localised AAA game trailer for European markets — multi-language VO, full QC, and platform-specific deliverables.")</p>
                <Link href="/portfolio/project-1" className="btn-3d inline-block px-6 py-2 font-bold">
                  VIEW PROJECT →
                </Link>
              </article>
              <article className="border-[4px] border-[#2e2e2e] p-6 bg-white hover:bg-[#FFE5D9] transition-colors fade-in-delay-2">
                <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                <p className="mb-6">Short description.</p>
                <Link href="/portfolio/project-2" className="btn-3d inline-block px-6 py-2 font-bold">
                  VIEW PROJECT →
                </Link>
              </article>
              <article className="border-[4px] border-[#2e2e2e] p-6 bg-white hover:bg-[#FFF9C4] transition-colors fade-in-delay-3">
                <h3 className="text-2xl font-bold mb-4">Project Title</h3>
                <p className="mb-6">Short description.</p>
                <Link href="/portfolio/project-3" className="btn-3d inline-block px-6 py-2 font-bold">
                  VIEW PROJECT →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#E0F2FE]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6 fade-in-up">CURIOUS, COLLABORATIVE, AND EXTREMELY ORGANISED</h2>
            <p className="text-xl mb-8 leading-relaxed fade-in-delay-1">
              With years of experience producing everything from high-energy fight VTs to large multi-market advertising campaigns, I keep projects on schedule, on budget, and genuinely enjoyable to make.
            </p>
            <Link href="/about" className="btn-3d inline-block px-8 py-4 bg-white font-bold fade-in-delay-2">
              READ MORE ABOUT ME →
            </Link>
          </div>
        </section>


        {/* Call-to-Action */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6 fade-in-up">GOT A PROJECT COMING UP?</h2>
            <p className="text-xl mb-8 fade-in-delay-1">
              I'd love to hear about it. I'm based in the UK and happy to work remotely or on-site.
            </p>
            <Link href="/contact" className="btn-3d-dark inline-block px-10 py-5 font-bold fade-in-delay-2">
              CONTACT ME →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
