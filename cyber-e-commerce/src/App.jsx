import './App.css'
import RouterSystem from './RouterSystem'
import { StateProvider } from './StateContext'

import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css'; 


function App() {
  return (
    <>
      <StateProvider>
        <RouterSystem/>    
        <ToastContainer floatingTime={1000} />      
      </StateProvider>
    </>
  )
}

export default App
