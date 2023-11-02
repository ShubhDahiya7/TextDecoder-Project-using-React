import React, { useState } from 'react';


export default function TextForm(props) {

    const convertToUppercase = ()=> {
        console.log("uppercase button was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const convertToLowercase = ()=> {
        console.log("uppercase button was clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const clearText = ()=> {
        console.log("clear text is clicked")
        let text = ""
        setText(text)
    }

    const copyText = ()=> {
        console.log("copied to clipboard")
        let inputElement = document.querySelector("#mybox")

        // select the input area text
        inputElement.select();
        inputElement.setSelectionRange(0, 99999)
        document.execCommand("copy");

        // deselect text field after copying
        inputElement.blur();
    }
    const handleOnChange = (event)=> {
        console.log("on change")
        setText(event.target.value)
    }

    // text is a var which is telling the initial state and it is set to enter text here
    // set text is a function which gives us final state
    const [text, setText] = useState('enter text here');
    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                {/*<label htmlFor="mybox" className="form-label">Example textarea</label>*/}
                {/*when we try to change textarea handle on change function is fired*/}
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>

            {/*when we click on button then convert to uppercase function is fired*/}
            <button className="btn btn-lg btn-primary" onClick={convertToUppercase}>convert to uppercase</button>
            <button className="btn btn-lg btn-primary mx-3" onClick={convertToLowercase}>convert to lowercase</button>
            <button className="btn btn-lg btn-primary mx-3" onClick={clearText}>clear text</button>
            <button className="btn btn-lg btn-primary mx-3" onClick={copyText}>copy text</button>

        </div>
            <div className="container my-3">
                <h2>Your Text Analysis</h2>
                {/*text.split[" "] would give us an array which will store only words*/}
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes Read</p>
                <h2>Preview Text</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
