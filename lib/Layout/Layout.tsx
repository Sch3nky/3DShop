

import Footer from '../footer'
import Navigation from '../navigation'
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(r => r.json())

export default function Layout({ children }:any) {
    const { data, error } = useSWR('http://127.0.0.1:5000/get/cart', fetcher, {
        revalidateIfStale: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        refreshInterval: 1000
      })

    console.log(data)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
        <Navigation data={data}/>
        <>{children}</>
        <Footer />
        </>
    )
}