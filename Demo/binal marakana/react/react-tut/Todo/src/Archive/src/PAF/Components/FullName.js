import React from 'react';
import TextField from "../../components/TextField";

function FullName(props) {
    return (
        <div className="sd_container_990">
            <p className="form_sub_2_title">{props.title}</p>
            <div className="sd_flex fullname_div sd_justbetween">
                <TextField credit={props.credit} item={props.item} handleChange={props.onChange} value={props.values?.firstName} name='firstName' disabled={props.disabled} uppercase={true} label="First Name" required="false" />
                <TextField credit={props.credit} item={props.item} handleChange={props.onChange} value={props.values?.middleName} name='middleName'  disabled={props.disabled} uppercase={true} label="Middle Name" required="false" />
                <TextField credit={props.credit} item={props.item} handleChange={props.onChange} value={props.values?.lastName} name='lastName'  disabled={props.disabled} uppercase={true} label="Last Name" required="false" />
            </div>
        </div >
    )
}

export default FullName
