import Head from "next/head"

interface head_props {
  name:String
  description:String
}

export default function Head_global(props:head_props) {
    return (
        <Head>
          <title>{props.name}</title>
          {props.description &&
            <meta name="description" content={props.description}/>
          }
          <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

Head_global.defaultProps = {
  description: ""
}
        