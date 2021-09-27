import Router from 'next/router'
import React from 'react'
import Spinner from '../assets/Spinner'
import Page from '../components/Page'
export default function _app({ Component, pageProps }) {
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        const start = () => {
            console.log('start')
            setLoading(true)
        }
        const end = () => {
            console.log('findished')
            setLoading(false)
        }
        Router.events.on('routeChangeStart', start)
        Router.events.on('routeChangeComplete', end)
        Router.events.on('routeChangeError', end)
        return () => {
            Router.events.off('routeChangeStart', start)
            Router.events.off('routeChangeComplete', end)
            Router.events.off('routeChangeError', end)
        }
    }, [])
    return (
        <Page>
            {loading ? <Spinner></Spinner> : <Component {...pageProps} />}
        </Page>
    )
}
