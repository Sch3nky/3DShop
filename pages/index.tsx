import styles from '../styles/Home/Home.module.css'
import Head_global from '../lib/global-head'
import Navigation from '../lib/navigation'
import Footer from '../lib/footer'
import Main from '../lib/Home/Main'

export default function Home({data}: any) {
  console.log(typeof data)
  return (
    <div className={styles.container}>
      <Head_global name="3D Shop" description="Jsem E-Shop s 3D producty"/>
      <Navigation />

      <Main data={data.data}/>

      <Footer />
    </div>
  )
}

export async function getStaticProps(context:any) {

  //const res = await fetch("http://127.0.0.1:5000/get/")
  //const data = await res.json()
  const data = {"data":{
    "news": {
      "link": "/produkty",
      "img_link": "https://iso.500px.com/wp-content/uploads/2015/10/paris_cover.jpeg"
    },
  
    "links": [
      {"link": "/asd", "img_link": "/asd"},
      {"link": "/asd", "img_link": "/asd"},
      {"link": "/asd", "img_link": "/asd"},
      {"link": "/asd", "img_link": "/asd"}
    ],
  
    "text_content": {
      "headline": "The Lol",
      "text": "lol",
      "link": "/produkty",
      "link_text": "Button",
      "img_link": ""
    },
  
    "products": ["ad", "ad", "ad"]
  }}

  return {
    props: {
      data,
    },
  }
}