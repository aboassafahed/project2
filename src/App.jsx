
import Home from "./Component/4-Home/Home"
import Header from "./Component/1-Header/Header"
import Hero from "./Component/2-Hero/Hero"
import Main from "./Component/3-main/Main"
import Contactus from "./Component/5-Contactus/Contactus"
import Footer from "./Component/Footer/Footer"
import { useEffect, useState } from "react"


function App() {
  useEffect(()=>{ 
    window.addEventListener("scroll",() => {
      if(window.scrollY >300){
        setScrollButton(true)
      }else{setScrollButton(false)

      }
  
    })
  },[])

  const[showScrollButton,setScrollButton] =useState(false);

  return (
    <div id="up" className="Container">
       <Header/>
       <Hero/>
       <div className="devider box-main "/>
        <div className="box-main">
          <Main/>
        </div>
        <div className="devider box-main "/>
        <div className="box-main">
          <Home/>
        </div>
        <div className="devider box-main "/>
        <div className="box-main">
          <Contactus/>
        </div>
        <div className="devider box-main "/>
        <Footer/>
        <a  style={{opacity:showScrollButton ? 1 : 0,transition:"1s"}} href="#up">
          <button className=" icon-circle-up scroll2Up"></button> 
        </a>
    </div>
  )
}

export default App
