// import logo from './logo.svg';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import Router from 'react.router'
import './App.css';
import './body.css'
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState('⚫');
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white',
    transition: 'all 1s'
  });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }
  const setBackground = (clr) => {
    if (clr === '🟢') {
      setMode({
        color: 'white',
        backgroundColor: 'green',
        transition: 'all 1s',
        borderColor: "white",

      });
      // setText("🟢");
      showAlert("Green Mode Enabled", "Success");
      document.body.style.backgroundColor = "green";
      document.body.style.transition = "all 1s";
    }
    else if (clr === '🟡') {
      setMode({
        color: 'black',
        backgroundColor: 'yellow',
        transition: 'all 1s',
        borderColor: "black"
      });
      // setText("🟢");
      showAlert("Yellow Mode Enabled", "Success");
      document.body.style.backgroundColor = "yellow";
      document.body.style.transition = "all 1s";
    }
    else if (clr === '🔵') {
      setMode({
        color: 'white',
        backgroundColor: 'blue',
        transition: 'all 1s',
        borderColor: "white"
      });
      // setText("🟢");
      showAlert("Blue Mode Enabled", "Success");
      document.body.style.backgroundColor = "blue";
      document.body.style.transition = "all 1s";
    }
    else if (text === "⚫") {
      setMode({
        color: 'white',
        backgroundColor: 'black',
        transition: 'all 1s',
        borderColor: "white"
      });
      setText("☀️");
      showAlert("Dark Mode Enabled", "Success");
      document.body.style.backgroundColor = "black";
      document.body.style.transition = "all 1s";
    }
    else {
      setMode({
        color: 'black',
        backgroundColor: 'white',
        transition: 'all 1s'
        // border: '1px solid black'
      });
      setText("⚫");
      showAlert("Light Mode Enabled", "Success");
      document.body.style.backgroundColor = "white"
      document.body.style.transition = "all 1s";

    }
  }
  return (
    <>
      <Router>
        <div>
          <Navbar title='TextUtils' mode={mode} changeMode={setBackground} text={text} />
          <Alert alert={alert} />
          <Routes>
            <Route exact path='/' element={<Home mode={mode}/>}/>
            <Route exact path='/about' element={<About mode={mode}/>} />
            <Route exact path='/textform'
              element={<TextForm heading="Enter the text to convert in UpperCase or LowerCase." mode={mode} text={text} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
