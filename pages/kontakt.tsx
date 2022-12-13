
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

        <section>
          <Form />
        </section>

        <section className='info'>
          <h1>Kontaktní údaje</h1>
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
        </section>
      </main>
      
    </div>
  )
}