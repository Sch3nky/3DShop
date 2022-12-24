
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
                  <h3>{item.name}</h3>
                  <h3>{item.value}</h3>
                </li>
              )}
              <br/>
              {data.contact_info.map(
                (item:any, key:number) =>
                <li key={key}>
                  <h3>{item.name}</h3>
                  <h3>{item.value}</h3>
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