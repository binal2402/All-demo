import React from 'react'

function TextArea(props) {
    const {label,name, require,value,handleChange,height,placeholder,uppercase} = props
    return (
        <div className="field_row_inner">
            {label ? <label className={`${require && 'required '}${uppercase && 'sd_textuppercase'}`}>{label} </label> :"" }
            <div className="field_input relative">
                <textarea  name={name} onChange={handleChange} value={value} placeholder={placeholder} style={{height:`${height ? height : "120px"}`}}>
                </textarea>
            </div>
        </div>
    )
}

export default TextArea