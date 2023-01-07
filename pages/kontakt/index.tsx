
import { useRouter } from 'next/router'
import Head_global from '../../lib/global-head'
import Form from '../../lib/Kontakt/Form'

import styles from "../../styles/Kontakt/Kontakt.module.scss"

interface sendJson {
  [name: string]: any
}

export default function Kontakt({data}:any) {
  const router = useRouter()
  async function submitFiles(files:FormData, id:Number): Promise<String>{
    const response = await fetch('http://127.0.0.1:5000/post/new-message/files/'+id, {
      method: 'POST',
      body: files
    }).then(r => {return r.json()})

    return response.status.toString()
  }
  
  async function submit(x:sendJson, files:FormData){
    try {
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
      
      if (Array.from(files).length > 0 && response.status == "done"){
        if (await submitFiles(files, Number(response.id)) == "done"){
          router.push("/kontakt/success")
        }
        else{
          router.push("/kontakt/fail")
        }
      }
      else if (response.status == "done"){
        router.push("/kontakt/success")
      }
      else{
        router.push("/kontakt/fail")
      }
    }
    catch{
      router.push("/kontakt/fail")
    }
  }

  return (
    <div className={styles.content}>
      <Head_global name="Kontakt"/>

      <main className={styles.main}>
        <h1 className={styles.headline}>
          Kontaktujte nás
        </h1>

        <p className={styles.text}>
        Pro objednávky zakázkové výroby nebo jakýchkoli otázek k naší výrobě prosíme, použijte formulář níže. Pro tisk již předvytvořených modelů prosíme popište specifikace objednávky, urychlíte tím výrobu. Pokud Vám nebude něco jasné neváhejte se na nás obrátit i telefonicky.
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