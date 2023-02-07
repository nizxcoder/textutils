import React, {useState} from 'react';



export default function TextForm(props) {
    const [text, setText] = useState("");
    const [textSize, setTextSize] = useState(14);
    // setText("hey man");
    // console.log(text);
    // let input_text = "hi";
    const prevStyle={
        fontSize: `${textSize}px`
    }
    // it will handle text value inside the state if any changing occurs inside this
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    //to convert given text to UpperCase
    const UpperCase = ()=>{
        setText(text.toUpperCase());
    }
    //to convert given text to lowerCase
    const LowerCase = ()=>{
        setText(text.toLowerCase());
    }
    //to convert given text to inverseCase
    const invertCase = ()=>{
        let wordsArray = text.split("").filter((num)=>{
            return num !== "";
        }), newText = ''
        for(let word of wordsArray){
            if(word === (word.toUpperCase())){
                newText += word.toLowerCase();
            }
            else newText += word.toUpperCase();
        }
        setText(newText);
    }
    const initialCase = ()=>{
        let wordsArr = text.split(' ').filter((num)=>{
            return num !== '';
        }), newText = '';
        for(let word of wordsArr){
            newText += (word.at(0).toUpperCase()+(word.slice(1)).toLowerCase() + " ");
        }
        setText(newText)
    }
    const incFontSize = ()=>{
        setTextSize(textSize+1);
    }
    const decFontSize = ()=>{
        if(textSize < 12){
            return;
        }
        setTextSize(textSize-1);
    }
    //to copy the inside text of textArea
    const textCopy = ()=>{
        navigator.clipboard.writeText(text);
    }
    //to paste the copy content inside the box
    const textPaste = ()=>{
        navigator.clipboard.readText().then((value)=>{
           setText(value);
        })
    }
    //to remove extra spaces
    const removeSpace = ()=>{
        let wordsArr = text.split(' ').filter((num)=>{
            return num !== '';
        }), newText = '';
        newText = wordsArr.join(" ")
        setText(newText);
    }
    //to clear the textArea
    const clear = ()=>{
        setText('');
    }

    return (
        <div className='my-4 container text-center ' style={props.mode}>
            <h2>{props.heading}</h2>
            <div className="input-group">
                <textarea type="text" className="form-control" id="input-text" placeholder="Enter your text" value={text} style={props.mode} onChange={handleOnChange} cols="200" rows="5" />
            </div>
            <div className='container' style={props.mode}>
                <button className={`btn btn-outline-secondary mx-1 ${props.text==="☀️"?"text-light":"text-dark"} `}  id='upper-case' type="button" onClick={UpperCase}>UpperCase</button>
                <button className={`btn btn-outline-secondary mx-1 ${props.text==="☀️"?"text-light":"text-dark"} `}  id='lower-case' type="button" onClick={LowerCase}>LowerCase</button>
                <button className={`btn btn-outline-secondary mx-1 ${props.text==="☀️"?"text-light":"text-dark"} `}  type='button' onClick={invertCase}>Invert Case</button>
                <button className={`btn btn-outline-secondary mx-1 ${props.text==="☀️"?"text-light":"text-dark"} `}  type='button' onClick={initialCase}>Initial Case</button>
                <button className={`btn btn-outline-secondary mx-1 ${props.text==="☀️"?"text-light":"text-dark"} `}  type='button' onClick={incFontSize}>Font Size++</button>
                 <button className={`btn btn-outline-secondary mx-1 ${props.text==="☀️"?"text-light":"text-dark"} `}  id='dfs' type='button' onClick={decFontSize}>Font Size--</button>
                <button className={`btn btn-outline-secondary mx-1 ${props.text==="☀️"?"text-light":"text-dark"} `}  type='button' onClick={removeSpace}>Remove Spaces</button>
                <button className={`btn btn-outline-secondary mx-1 ${props.text==="☀️"?"text-light":"text-dark"} `}  type='button' onClick={textCopy}>Copy Text</button>
                <button className={`btn btn-outline-secondary mx-1 ${props.text==="☀️"?"text-light":"text-dark"} `}  type='button' onClick={textPaste}>Paste</button>
                <button className = {`btn btn-outline-danger mx-1`} type="button" onClick={clear}>Clear</button>
                <div className='container my-4'>
                    <h2>Your Text Summary</h2>
                    <h4>Words = <span>{text.split(" ").filter((num)=>{
                        return num !== ''
                    }).length}</span> and Characters = <span>{text.length}</span> </h4>
                    <h5><span>{(text.length * 0.005).toFixed(2)}</span> Minutes required to read</h5>
                    <h2 className='mt-4'>Preview</h2>
                    <pre className='px-4 py-2 text-start border' style={prevStyle}>{text.normalize()}</pre>
                </div>
            </div>

        </div>
    )
}