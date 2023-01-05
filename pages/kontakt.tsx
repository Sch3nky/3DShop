
import { json } from 'stream/consumers'
import Head_global from '../lib/global-head'
import Form from '../lib/Kontakt/Form'
import Navigation from '../lib/navigation'

import styles from "../styles/Kontakt/Kontakt.module.scss"
import { it } from 'node:test'

interface sendJson {
  [name: string]: any
}

export default function Kontakt({data}:any) {
  console.log(data)
  async function submit(x:sendJson){
    const response = await fetch("http://127.0.0.1:5000/post/new-message", 
                      {
                      method: 'POST', 
                      headers:{
                        'content-type':"application/json"
                      },
                      body: JSON.stringify(x)
                      }
                      )
      .then(r => {return r.json()});  
  }

  return (
    <div className={styles.content}>
      <Head_global name="Kontakt"/>

      <main className={styles.main}>
        <h1 className={styles.headline}>
          Kontaktujte nás
        </h1>

        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <section className={styles.form}>
          <Form submit={submit}/>
        </section>

        <section className={styles.info}>
          <h2>Kontaktní údaje</h2>
          <div className={styles.values}>
            <ul>
              {data.company_info.map(
                (item:any, key:number) =>
                <li key={key}>
                  <h2>{item.name}</h2>
                  <h2>{item.value}</h2>
                </li>
              )}
              <br/>
              {data.contact_info.map(
                (item:any, key:number) =>
                <li key={key}>
                  <h2>{item.name}</h2>
                  <h2>{item.value}</h2>
                </li>
              )}
            </ul>
          </div>
        </section>
      </main>
      
    </div>
  )
}

export async function getStaticProps(context:any) {
  const res = await fetch("http://127.0.0.1:5000/get/kontakt")
  const r_data = await res.json()
  const data = r_data.data
  return {
    props: {
      data,
    },
  }
}