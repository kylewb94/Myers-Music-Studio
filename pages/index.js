import Head from 'next/head'
import Scroll from '@/components/Scroll'
import Header from '@/components/Header'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Questions from '@/components/Questions'
import Footer from '@/components/Footer'
import { questionsData } from '@/utils/content'

export default function Home() {
  return (
    <div className='bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400'>
      <Head>
        <title>Myers Music Studios</title>
        <meta name="description" content="" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#eef2ff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Scroll />
      <Header />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <h2 id='questions' className='max-w-7xl mx-auto px-4 sm:px-3 md:px-5 mb-6 text-slate-900 dark:text-slate-50'>FAQ</h2>
      {questionsData.map(({ title, content }) => (
        <Questions key={title.id} title={title} content={content} />
      ))}
      <Footer />
    </div>
  )
}
