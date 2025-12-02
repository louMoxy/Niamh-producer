import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Riley Shaw</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12 md:mb-16 text-center">
            <div className="bg-white border-[4px] border-[#2e2e2e] p-6 md:p-8 inline-block transform rotate-[-1deg] fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black">ABOUT RILEY</h1>
            </div>
          </div>

          {/* Intro Section with Pattern */}
          <section className="mb-12 md:mb-20 bg-dot-pattern py-8 md:py-12 px-4 md:px-8 relative">
            <div className="bg-white border-[4px] border-[#2e2e2e] p-4 md:p-8 transform rotate-[1deg] max-w-3xl mx-auto fade-in-delay-1">
              <p className="text-lg md:text-2xl mb-4 md:mb-6 leading-relaxed font-bold">
                Hello! I'm Riley — a producer with a background in TV, advertising, sports broadcasting, and the wonderfully chaotic world of video game trailers.
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                I specialise in keeping creative projects running smoothly from start to finish: budgets, timelines, localisation, VO direction, QC, delivery… all the fun stuff that makes the magic actually happen.
              </p>
            </div>
          </section>

          {/* What I'm Known For - Grid Layout */}
          <section className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-center mb-8 md:mb-10">WHAT I'M KNOWN FOR</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="border-[4px] border-[#2e2e2e] p-4 md:p-8 bg-[#E0F2FE] transform rotate-[-0.5deg]">
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                  <li className="font-bold">✓ Clear communication (no confusion, no drama)</li>
                  <li className="font-bold">✓ Smart budgeting and accurate timelines</li>
                  <li className="font-bold">✓ Keeping teams happy and supported</li>
                </ul>
              </div>
              <div className="border-[4px] border-[#2e2e2e] p-4 md:p-8 bg-[#FFF9C4] transform rotate-[0.5deg]">
                <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                  <li className="font-bold">✓ Detail-obsessed QC</li>
                  <li className="font-bold">✓ Handling multi-language VO with ease</li>
                  <li className="font-bold">✓ Delivering every version, every ratio, every platform</li>
                </ul>
              </div>
            </div>
            <div className="border-[4px] border-[#2e2e2e] p-4 md:p-6 bg-[#FFE5D9] text-center">
              <p className="text-lg md:text-xl font-bold">
                Basically: if it needs organising, scheduling, exporting, checking, I'm your gal.
              </p>
            </div>
          </section>

          {/* Background Section - Timeline Style */}
          <section className="mb-12 md:mb-20 bg-grid-pattern py-8 md:py-12 px-4 md:px-8">
            <div className="bg-white border-[4px] border-[#2e2e2e] p-4 md:p-8">
              <h2 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 text-center">MY BACKGROUND</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="border-l-[4px] border-[#2e2e2e] pl-4 md:pl-6">
                  <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3">Cage Warriors</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    I began my career in sports broadcasting as a Junior Editor, cutting pre-fight VTs, coordinating interviews, and even vision mixing live broadcasts. It taught me to work fast, stay calm, and problem-solve on the spot.
                  </p>
                </div>

                <div className="border-l-[4px] border-[#2e2e2e] pl-4 md:pl-6">
                  <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3">Banana Split Productions</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    From there, I moved into production, working my way from Assistant Producer to Junior Producer and then Producer — managing projects for TV, Cinema, and Social Media across Europe.
                  </p>
                </div>

                <div className="border-[4px] border-[#2e2e2e] p-4 md:p-6 bg-[#E0F2FE] transform rotate-[0.5deg]">
                  <h3 className="text-lg md:text-xl font-black mb-3 md:mb-4">What I've Overseen:</h3>
                  <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                    <div className="bg-white border-[2px] border-[#2e2e2e] p-2 md:p-3">
                      <p className="text-sm md:text-base">• Managing client assets and production pipelines</p>
                    </div>
                    <div className="bg-white border-[2px] border-[#2e2e2e] p-2 md:p-3">
                      <p className="text-sm md:text-base">• Creating first draft and final budgets</p>
                    </div>
                    <div className="bg-white border-[2px] border-[#2e2e2e] p-2 md:p-3">
                      <p className="text-sm md:text-base">• Building detailed timelines and delivery sheets</p>
                    </div>
                    <div className="bg-white border-[2px] border-[#2e2e2e] p-2 md:p-3">
                      <p className="text-sm md:text-base">• Directing multi-language VO sessions</p>
                    </div>
                    <div className="bg-white border-[2px] border-[#2e2e2e] p-2 md:p-3">
                      <p className="text-sm md:text-base">• Rigorous QC of every single asset</p>
                    </div>
                    <div className="bg-white border-[2px] border-[#2e2e2e] p-2 md:p-3">
                      <p className="text-sm md:text-base">• Clearing adverts for UK cinema</p>
                    </div>
                    <div className="bg-white border-[2px] border-[#2e2e2e] p-2 md:p-3">
                      <p className="text-sm md:text-base">• Clearing TV spots for UK + European territories</p>
                    </div>
                    <div className="bg-white border-[2px] border-[#2e2e2e] p-2 md:p-3">
                      <p className="text-sm md:text-base">• Coordinating editors, designers, and freelancers</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-[4px] border-[#2e2e2e] pl-4 md:pl-6">
                  <h3 className="text-xl md:text-2xl font-black mb-2 md:mb-3">Freelance (2024 - Present)</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Since 2024, I've been working freelance, producing game trailers for localisation, remote projects, and social-first travel content.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Fun Bits - Card Style */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="border-[4px] border-[#2e2e2e] p-4 md:p-6 bg-[#FFF9C4] transform rotate-[-1deg]">
              <h2 className="text-2xl md:text-3xl font-black mb-3 md:mb-4">FUN BITS</h2>
            </div>
            <div className="border-[4px] border-[#2e2e2e] p-4 md:p-6 bg-white transform rotate-[0.5deg]">
              <p className="text-base md:text-lg font-bold">📊 I love a good spreadsheet</p>
            </div>
            <div className="border-[4px] border-[#2e2e2e] p-4 md:p-6 bg-white transform rotate-[-0.5deg]">
              <p className="text-base md:text-lg font-bold">🏷️ I'm unreasonably passionate about well-labelled assets</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

