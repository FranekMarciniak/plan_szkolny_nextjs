import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(
            (App) => (props) => sheet.collectStyles(<App {...props} />)
        )
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render() {
        return (
            <Html lang="pl">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Azeret+Mono&display=swap"
                        rel="stylesheet"
                    />
             <script async src="https://www.googletagmanager.com/gtag/js?id=G-5CCSVQN388"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5CCSVQN388');
</script>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
