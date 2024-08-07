import './App.css'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import { StateProvider } from './StateContext'

function App() {
  return (
    <>
      <StateProvider>
        <Page2 />
      </StateProvider>
    </>
  )
}

export default App
