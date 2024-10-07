import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Outlet} from "react-router-dom"
import Header from '../components/header'
// import './App.css'
import Book from '../components/Book_UI'
import { Provider } from 'react-redux';
import Slice_main from '../components/configure_slice'
import Footer from '../components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={Slice_main}>
    
    <Header/>
      {/* <Book /> */}
      <Outlet/>
<Footer/>
      </Provider>
    </>
  )
}

export default App
