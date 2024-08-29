import './App.css'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import P4section1 from './components/page4/p4section1/P4section1'
import Page4 from './components/page4/Page4'
import ShoppingCard from './components/shoppingCardPage/ShoppingCardPage'
import Steps from './components/steps/Steps'
import { StateProvider } from './StateContext'


function App() {
  return (
    <>
      <StateProvider>
          <ShoppingCard/>    
          <Page2/>
      </StateProvider>
    </>
  )
}

export default App
