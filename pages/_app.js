import '@styles/globals.css'
import Head from 'next/head'

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gray-100 py-4 px-2 sm:py-6 sm:px-4 md:py-12 md:px-8" style={{backgroundColor: '#c2f4ff'}}>
        <div className="max-w-[1600px] mx-auto border-[4px] sm:border-[6px] border-[#2e2e2e] bg-white min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-6rem)] shadow-2xl">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default Application
