import { createGlobalStyle } from 'styled-components'
import Footer from './Footer'
const GlobalStyles = createGlobalStyle`
  body {
  background-color: #2f3437;
  color: #fff;
    height: 100vh;
    width: 100vw;    
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  *{
      font-family: Azeret Mono, monospace;
      
  }
  @media only screen and (max-width: 400px) {
        body {
            font-size: 13px;
        }

    }
`
function Page({ children }) {
    return (
        <>
            <GlobalStyles />
            {children}
            <Footer />
        </>
    )
}

export default Page
