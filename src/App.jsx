import './App.css'
import Provider from './context/Provider'
import RouterPrincipal from './router/RouterPrincipal'

function App() {

    

  return (
    <>
    <Provider>
      <RouterPrincipal/>
    </Provider>
    </>
  )
}

export default App
