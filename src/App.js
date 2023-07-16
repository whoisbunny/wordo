// import React from 'react';
import { useState } from "react";


import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";
import Theme from "./components/Theme";


function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#042743";
      showalert("Dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.background = "#f1f1f1";
      showalert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="Wordo" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Theme mode={mode} toggleMode={toggleMode}  />

      <div className="container " >
        <TextForms
          heading="Enter the text "
          showalert={showalert}
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
