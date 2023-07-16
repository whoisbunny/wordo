import React, { useState } from "react";

export default function TextForms(props) {
  const handleUp = () => {
    
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted to Uppercase", "success")
  };
  const textcopy=()=>{

    navigator.clipboard.writeText(text);
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
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="text-center m-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control bg-info bg-opacity-10 border border-info rounded-end p-4"
            id="Mybox"
            rows="8"
            value={text}
            onChange={handlechange}
            style={{
              background: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
              resize: "none",
            }}
          ></textarea>
        </div>
        {/* <div className="d-flex wrap"> */}
        
        <button
          className="btn btn-outline-info rounded-pill m-3"
          onClick={handleUp}
          >
          Upper case
        </button>
        <button
          className="btn btn-outline-info rounded-pill m-3"
          onClick={handlelow}
          >
          Lower case
        </button>
        <button
          className="btn btn-outline-info rounded-pill m-3"
          onClick={handleclr}
          >
          Clear
        </button>
        <button
          className="btn btn-outline-info rounded-pill m-3"
          onClick={textcopy}
          >
          Cpoy
        </button>
        <button
          className="btn btn-outline-info rounded-pill m-4"
          onClick={removeSpace}
          >
          Remove Extra Space
        </button>
          {/* </div> */}
        <div className="container my-3">
          <h1 className="text-center">Text Summery</h1>
          <p className="lead">
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words and {text.length} Characters
          </p>
          <p className="lead">
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minuts{" "}
          </p>
          <h2 className="text-center m-4"> Preview </h2>
          <p className="lead">
            {text.length > 0 ? text : " Nothing to preview "}
          </p>
        </div>
      </div>
    </>
  );
}
