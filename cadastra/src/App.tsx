import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { GlobalProvider } from "./providers/GlobalContext/GlobalContext"
import "./styles/GlobalReset.css"
import "./styles/GlobalStyled.css"

function App() {

  return (
    <>
      <GlobalProvider>
        <Header/>
        <Main/>
        <Footer/>
      </GlobalProvider>
    </>
  )
}

export default App
