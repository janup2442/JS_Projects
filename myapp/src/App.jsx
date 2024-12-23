import { useState } from 'react'
import Accordian from './component/accordian'
import SingleAccordian from './component/singleAccodrian/singleAccordian';

function App() {

  return (
    <>
      <div>
        <Header/>
        <Accordian/>
        <SingleAccordian/>
      </div>
    </>
  )
}

export default App


function Header(){
  const headStyle = {
    padding:"2% 1%",
    // border:"",
    borderRadius:"5px",
    textAlign:"center",
    color:"white",
    backgroundColor:"#3f676e"
  };
  return(
   
   <>
    <div style={headStyle}>
      <h1>REACT JS Projects</h1>
    </div>
   </> 
  )
}



