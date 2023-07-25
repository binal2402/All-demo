import React from 'react';
import TextField from "../../components/TextField";
import Dropdown from "../../components/Dropdown";
import FullName from './FullName';

export default function MainContactForm() {
    return (
        <>
            <div className="sd_flex top_2_field">
                <FullName />
            </div>
            <div className="sd_flex two_field">
                <TextField uppercase="true" label="Title" required="false" />
                <TextField uppercase="true" label="Company" required="false" />
            </div>
            <div className="sd_flex single_field">
                <TextField uppercase="true" label="Email" required="false" />
            </div>
            <div className="sd_flex single_field">
                <TextField uppercase="true" label="Address1" required="false" />
            </div>
            <div className="sd_flex single_field">
                <TextField uppercase="true" label="Address2" required="false" />
            </div>
            <div className="sd_flex two_field">
                <TextField uppercase="true" label="City" required="false" />
                <TextField uppercase="true" label="State/Province" required="false" />
            </div>
            <div className="sd_flex two_field">
                <TextField uppercase="true" label="Zip Code" required="false" />
                <TextField uppercase="true" label="Country" required="false" />
            </div>
            <div className="sd_flex two_field">
                <TextField uppercase="true" label="Phone Number" required="false" />
                <Dropdown label="Type" />
            </div>
        </>
    )
}
