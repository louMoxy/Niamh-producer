import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Project2() {
  return (
    <>
      <Head>
        <title>Cinematic TV Spot Campaign - Riley Shaw</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/portfolio" className="inline-block mb-8 font-bold hover:underline">
            ← BACK TO PORTFOLIO
          </Link>

        <h1 className="text-6xl font-black mb-12">CINEMATIC TV SPOT CAMPAIGN</h1>

          <section className="border-[4px] border-[#2e2e2e] p-6 bg-[#FFE5D9] mb-8">
            <p className="text-lg mb-2"><strong>CLIENT:</strong> [Fictional Brand]</p>
            <p className="text-lg"><strong>ROLE:</strong> Lead Producer</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black mb-6">OVERVIEW</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                This project involved producing a cinematic TV and cinema campaign across multiple European markets, with a focus on
                bold visuals and clear storytelling.
              </p>
              <p>
                I managed production timelines, localised edits, audio mixes and delivery for every broadcaster spec, ensuring each
                version passed clearance on the first attempt.
              </p>
            </div>
          </section>

          <section className="border-[4px] border-[#2e2e2e] p-8 bg-[#FFF9C4] mb-12">
            <h2 className="text-3xl font-black mb-6">MY RESPONSIBILITIES</h2>
            <ul className="space-y-3 text-lg">
              <li>• Built and maintained the master TV and cinema delivery grid across all territories</li>
              <li>• Coordinated offline/online edits, grade and audio mix sessions</li>
              <li>• Managed localisation for supers, end-slates and compliance audio</li>
              <li>• Submitted and tracked approvals with clearance bodies and broadcasters</li>
            </ul>
          </section>

          <section className="border-[4px] border-[#2e2e2e] p-8 bg-[#E0F2FE]">
            <h2 className="text-3xl font-black mb-6">RESULT</h2>
            <p className="text-lg leading-relaxed">
              Spots delivered on time to all broadcasters and cinemas, with full approval and no rejections across multiple
              territories.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

