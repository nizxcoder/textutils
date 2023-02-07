// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './body.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [text, setText] = useState('⚫');
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white',
    transition: 'all 1s'
    // border: '1px solid black'
  });
  const setBackground = () => {
    if (text === "⚫") {
      setMode({
        color: 'white',
        backgroundColor: 'black',
        transition: 'all 1s',    
        borderColor: "white"    
      });
      setText("☀️");
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
      document.body.style.backgroundColor = "white"
      document.body.style.transition = "all 1s";

    }
  }
  return (
    <>
      <div>
        <Navbar title='TextUtils' name="Converter" mode={mode} changeMode={setBackground} text={text} />
        <TextForm heading="Enter the text to convert in UpperCase or LowerCase." mode={mode} text={text}/>
      </div>
    </>
  );
}

export default App;
