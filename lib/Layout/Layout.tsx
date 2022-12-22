

import Footer from '../footer'
import Navigation from '../navigation'
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(r => r.json())

export default function Layout({ children }:any) {
    return (
        <>
        <Navigation/>
        <>{children}</>
        <Footer />
        </>
    )
}