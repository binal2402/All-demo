import React from 'react'

export default function Checkbox(props) {
    const{label, name, type, id, checked, value,disable} = props;
    console.log("props",props);
    return (
        <div className="checkbox_field_row">
                <div className="checkBox">
                    <input 
                        type={type} 
                        id={id} 
                        name={name} 
                        checked={checked}
                        disabled={disable}
                        value={value}
                        onChange={(e) => this.props.onChange(e, id)} />
                    <label for={id}>{label}</label>
                </div>
            </div>
    )
}
