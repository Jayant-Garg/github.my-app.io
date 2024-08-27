import React, { useState } from 'react';

export default function TextArea(props) {
    const [text, setText] = useState("");
    const handleOnChange = (e) => {
        setText(e.target.value);

    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearText = () => {
        setText('');
    }


    return (
        <>
            <div className="container">
                <div className={`form-group text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                    <button className="btn btn-primary" onClick={handleUpClick}>Change To UpperCase</button>
                    <button className="btn btn-primary" onClick={handleLowClick}>Change To LowerCase</button>
                    <button className="btn btn-primary" onClick={handleClearText}>Clear Text</button>
                </div>
                <div className={`container form-group text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h2>Your Text Summary</h2>
                    <p>{text == "" ? 0 : text.trim().split(/[ ]+/).length} words, {text.length} characters</p>
                    {/* <p>{text.split(" ").filter((element) => { return element.length!=0 }).length} words, {text.length} characters</p> */}
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
} 