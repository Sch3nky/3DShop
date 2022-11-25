import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head_global from '../lib/global-head'
import Navigation from '../lib/navigation'
import Footer from '../lib/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head_global name="LOL" description="hello"/>
      <Navigation />

      <main className={styles.news}>
        <section>

        </section>
      </main>

      <Footer />
    </div>
  )
}
