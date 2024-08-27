import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, ] = useState('Enable Dark Mode');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      {/* <Router> */}
        <Alert alert={alert} />
        <Navbar dd1='Home' dd2='About' mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <TextForm heading='Enter you message here:' mode={mode} />
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} > */}
          {/* </Route> */}
          {/* <Route exact path="/home" element={<TextForm heading='Enter you message here:' mode={mode} />}> */}
          {/* </Route> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;