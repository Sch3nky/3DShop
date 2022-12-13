
import Head_global from '../lib/global-head'
import Form from '../lib/Kontakt/Form'
import Navigation from '../lib/navigation'

import styles from "../styles/Kontakt/Kontakt.module.scss"

export default function Home2() {
  return (
    <div>
      <Head_global name="Kontakt"/>
      <Navigation />

      <main className={styles.main}>
        <h1 className={styles.headline}>
          Kontaktujte nás
        </h1>

        <section className={styles.form}>
          <Form />
        </section>


        <section className={styles.info}>
          <h2>Kontaktní údaje</h2>
          <div className={styles.values}>
            <ul>
              <li>
                Název firmy
              </li>

              <li>
                IČO: 
              </li>

              <li>
                Adressa:
              </li>
            </ul>
            <ul>
              <li>
                Kontaktní osob: Ja
              </li>

              <li>
                Telefon: 777 777 777
              </li>

              <li>
                E-Mail:
              </li>
            </ul>
          </div>
        </section>
      </main>
      
    </div>
  )
}