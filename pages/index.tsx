import styles from '../styles/Home/Home.module.css'
import Head_global from '../lib/global-head'
import Main from '../lib/Home/Main'

export default function Home({data}: any) {
  return (
    <div className={styles.container}>
      <Head_global name="3D Shop" description="Jsem E-Shop s 3D producty"/>
      <Main data={data.data}/>
    </div>
  )
}

export async function getStaticProps(context:any) {
  const res = await fetch("http://127.0.0.1:5000/get/")
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}