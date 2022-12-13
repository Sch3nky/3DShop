
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
        <section>
          <h1 className={styles.headline}>
            Headline
          </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>

        <section>
          <h1>
            Kontaktujte nás
          </h1>
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