import styles from '../styles/Home.module.css'
import Head_global from '../lib/global-head'
import Navigation from '../lib/navigation'
import Footer from '../lib/footer'
import Main from '../lib/Home/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head_global name="LOL" description="hello"/>
      <Navigation />

      <Main />

      <Footer />
    </div>
  )
}
