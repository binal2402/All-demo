import React,{useState} from 'react'


export default function TextForm(props) {
    //--------------setText:update text(update state)--------------
    //--------------Text:set text--------------
    //--------------state variable bnava mate useState no use thay-------

    const handleUpClick = () => {
        // console.log("update text" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase",'success')
    }

    const handleClearClick = () => {
        let newtext = '';
        setText(newtext)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
        // console.log("---click handleonchange",event.target.value);
    }

    const handleCopy = () =>{
        const text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () =>{
        const newtext = Text.split(/[  ]+/)
        setText(newtext.join(" "))
    }
    // const [Text, setText] = useState('enter the text');
    const [Text, setText] = useState('');
    // Text="hello"; //wrong way to change the state
    // setText("this is text"); //correct way to change the state

  return (
    <div style = {{color : props.modetype === 'dark' ? 'white' : 'black'}}>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control" value={Text} onChange={handleOnChange} style = {{backgroundColor : props.modetype === 'dark' ? '#05324c' : 'white',color : props.modetype === 'dark' ? 'white' : 'black'}} id="myBox" rows='8'></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpace}>remove space</button>
        </div>
        <div className='container'>
            <h1>youe text summary</h1>
            <p>{Text.split(/\s+/).filter(test => test !== '').length} words and {Text.length} characters and {Text.split("\n").length} Line</p>

            {/* ----word read time find -- 1/125 */}
            <p>{0.008 * Text.split(' ').length} minutes read</p> 

            <h2>Preview</h2>
            <p>{Text.length>0?Text:"Enter something to Preview it here"}</p>
        </div>
    </div>
  )
}

