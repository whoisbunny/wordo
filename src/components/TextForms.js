import React, { useState } from "react";

export default function TextForms(props) {
  const handleUp = () => {
    // console.log('Upper case : ' + text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted to Uppercase", "success")
  };
  const textcopy=()=>{
    let text = document.getElementById("Mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy To Clipbord", "success")

  }
  const handleclr = () => {
    let newtext = '';
    settext(newtext);
    props.showalert("Cleared", "warning")

  };
  const handlelow = () => {
    // console.log('Upper case : ' + text);
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Converted to Lowercase", "success")

  };
  const handlechange = (event) => {
    // console.log("on change");
    settext(event.target.value);
  };
  const removeSpace =()=>{
    let newtext = text.split(/[ ]+/)
    settext(newtext.join(' '));
    props.showalert("Unexpected space has been removed", "success")

  }
  const [text, settext] = useState("");

  return (
    <>
    
    <div className="container" style={{color : props.mode ==='dark'?'white':'#042743'}}>
      <h1 className="text-center m-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="Mybox"
          rows="8"
          value={text}
          onChange={handlechange}
          style={{background : props.mode ==='dark'?'gray':'white' , color : props.mode ==='dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button className="btn btn-primary m-4" onClick={handleUp}>
        Upper case
      </button>
      <button className="btn btn-primary m-4" onClick={handlelow}>
        Lower case
      </button>
      <button className="btn btn-primary m-4" onClick={handleclr}>
        Clear
      </button>
      <button className="btn btn-primary m-4" onClick={textcopy}>
        Cpoy
      </button>
      <button className="btn btn-primary m-4" onClick={removeSpace}>
        Remove Extra Space 
      </button>
      <div className="container my-3" >
        <h1 className="text-center">Text Summery</h1>
        <p className="lead">{text.split(" ").length} Words and {text.length} Characters</p>
        <p className="lead">{0.008 * text.split(" ").length} Minuts </p>
        <h2 className="text-center m-4"> Preview </h2>
        <p className="lead">{text.length>0? text : "Enter something and get preview  here"}</p>

      </div>
    </div>
    </>
  );
}
