import styles from '../styles/Home/Home.module.css'
import Head_global from '../lib/global-head'
import Navigation from '../lib/navigation'
import Footer from '../lib/footer'
import Main from '../lib/Home/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head_global name="3D Shop" description="Jsem E-Shop s 3D producty"/>
      <Navigation />

      <Main />

      <Footer />
    </div>
  )
}
