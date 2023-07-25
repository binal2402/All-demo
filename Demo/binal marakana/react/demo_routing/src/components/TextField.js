import React from "react";

const TextField=(props)=> {
  const { label, name, type, require, disabled, value, handleChange, readonly, pattern, placeholder, uppercase, onBlur, item, credit ,errorValidation, fpgerror} = props
  return (
    <div className="field_row_inner">
      {label ? <label className={`${require && 'required '} ${uppercase && 'sd_textuppercase'}`}>{label} </label> : ""}
      <div className="field_input relative">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          pattern={pattern}
          readOnly={readonly}
          onChange={(e) => { (item && credit) ? handleChange(e, item._id, credit._id) : handleChange(e) }}
          onBlur={onBlur}
        />
      </div>
      {errorValidation ? <span className="error" style={{ color: 'red' }} >{errorValidation}</span> : ""}
      {fpgerror ? <span className="error" style={{ color: 'red' }} >{fpgerror}</span> : ""}
    </div>
  )

}

export default TextField;