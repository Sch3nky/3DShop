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

      <Main data={data.data}/>
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
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum justo ac iaculis facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ullamcorper ornare tincidunt. Quisque vehicula tincidunt velit et porttitor. Aliquam neque arcu, blandit vel ullamcorper ut, volutpat euismod risus. Nunc suscipit magna nec enim fringilla porta. Aliquam hendrerit commodo odio sed consequat. Aliquam pretium vel lacus quis fringilla. Vivamus scelerisque condimentum lacus a finibus. Nullam eget libero accumsan, scelerisque justo ac, auctor sem. Nam risus lorem, laoreet non augue sit amet, porttitor faucibus sem.",
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