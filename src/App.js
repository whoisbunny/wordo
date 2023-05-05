
// import React from 'react'; 
import  { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";
function App() {

const [mode,setmode] = useState("light");

const [alert, setalert] = useState(null);
const showalert =(message ,type)=>{ 
  setalert({
       message: message ,
      type: type
    }
    )
    setTimeout(() => {
      setalert(null)
    }, 2000);
}
const toggleMode=()=>{
  if(mode==="light"){
    setmode('dark');
    document.body.style.background = '#042743'
    showalert("Dark mode is enabled" , "success")
  }
  else{
    setmode('light');
    document.body.style.background = '#f1f1f1'
    showalert("Light mode is enabled" , "success")

  }
}
return (
      <>
    {/* <Router> */}
    <Navbar title="texttutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>

    <div className="container">
    {/* <Switch> */}
    {/* <Route exact path="/"> */}
          <TextForms heading="Enter the text " showalert={showalert} mode={mode}/>  
          {/* </Route> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
  }

export default App;
