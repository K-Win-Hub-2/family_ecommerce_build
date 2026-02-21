import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import CheckBot from '../components/ChatBot'
import ChatBot from '../pages/bot/ChatBot'

const HomePage = () => {
  
  return (
    <div>
      {/* <ChatBot /> */}
      <Navbar/>
      <Main />
      
      <Footer/>
    </div>
  )
  
}
 
export default HomePage
