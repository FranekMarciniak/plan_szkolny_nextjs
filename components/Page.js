import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    font-family: "Azeret Mono", monospace;
  }

  body {
  background-color: #2f3437;
  color: #fff;
  }
  
`;
function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

export default Page;
