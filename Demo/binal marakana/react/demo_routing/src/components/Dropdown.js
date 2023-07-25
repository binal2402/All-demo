import React from 'react'
import Tooltip from './Tooltip'

function Dropdown(props) {
    const { label, require, name, value, disable, defaultValue, fpgerror, toolTip, uppercase, optionID, creditOption } = props
    const options = props.options && props.options.map(function (option, i) {
        if (creditOption) {
            return(
                <option defaultValue={defaultValue} key={option} value={option._id}>{option.name}</option>
            )
        }else{
        return (
            <option defaultValue={defaultValue} key={option} value={option}>{option}</option>
        )}
    })
    return (
        <div className="field_row_inner">
            {label ? <label className={`${require ? 'required' : null} ${uppercase ? 'sd_textuppercase' : ''}`}>{label}
                {toolTip ?
                    <Tooltip
                        id="accessibility"
                        customClass="tooltip-button tooltip-short-program"
                        data={toolTip}
                        place="right"
                        width={13}
                        data_top={25}
                    />
                    : ''}
            </label> : ""}
            <div className="select_field relative">
                <select disabled={disable} name={name} onChange={optionID ? (e) => props.onChange(e,optionID) : (e) => props.onChange(e)} value={value}>
                
                    {options}
                </select>
                {fpgerror ? <span className="error" style={{ color: 'red' }} >{fpgerror}</span> : ""}
            </div>
        </div>
    )
}

export default Dropdown
