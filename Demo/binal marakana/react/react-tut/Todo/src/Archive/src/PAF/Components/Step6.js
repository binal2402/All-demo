import React from 'react'
import Header from '../../layout/Header'
import Footer from "../../layout/Footer";
import FormHeader from './FormHeader';
import Dropdown from '../../components/Dropdown';
import FormFooter from './FormFooter';
import TextField from '../../components/TextField';

function Step6() {

    const TeamForm = () => {
        return (
            <div className="border_bottom_gray team_info_section">
                <div className="form_content_top">
                    <div class="form_content_top_title pb_0">
                        <i>Screenwriter 1</i>
                    </div>
                </div>
                <div className="sd_flex fullname_div sd_justbetween">
                    <TextField type="text" name="fname" label="First Name" uppercase />
                    <TextField type="text" name="mname" label="Middle Name" uppercase />
                    <TextField type="text" name="lname" label="last Name" uppercase />
                </div>
                <div className="sd_flex fullname_div two_field">
                    <TextField type="text" name="title" label="Title" uppercase />
                    <TextField type="text" name="company" label="Company" uppercase />
                </div>
                <div className="sd_flex fullname_div one_field">
                    <TextField type="text" name="Email" label="Email" uppercase />
                </div>
                <div className="sd_flex fullname_div one_field">
                    <TextField type="text" name="address1" label="Address 1" uppercase />
                </div>
                <div className="sd_flex fullname_div one_field">
                    <TextField type="text" name="address2" label="Address 2" uppercase />
                </div>
                <div className="sd_flex fullname_div two_field">
                    <TextField type="text" name="City" label="City" uppercase />
                    <TextField type="text" name="state" label="State/Province" uppercase />
                </div>
                <div className="sd_flex fullname_div two_field">
                    <TextField type="text" name="zip" label="Zip Code" uppercase />
                    <Dropdown label="Country" uppercase options={["India", "Aus"]} />
                </div>
                <div className="sd_flex fullname_div two_field">
                    <TextField type="text" name="phone" label="Phone Number" uppercase />
                    <Dropdown label="Type" uppercase options={["India", "Aus"]} />
                </div>
            </div>
        )
    }


    return (
        <div>
            <Header />
            <FormHeader />
            <div className="container form_inner step2 step_eight step_common">
                <div className="underline">
                    <div className='step'>
                        <div className='step_no'>
                            <p>Step 3</p>
                        </div>
                        <div className='step_des'>
                            <p>After you submit, you cannot return to this form to make changes. For change requests, email your dedicated Artist Relations Liaison and Festival Publicist.</p>
                            <p>Publicity and marketing materials will be provided to third-party groups, may be used on all Sundance Institute websites, blogs, and print publications before and after the Festival, and will be placed in the Sundance Institute Archives.</p>
                        </div>
                    </div>
                </div>
                <div className="form_content_questions">
                    <div className="form_content form_content_questions_inner pt_0">
                        <div className="form_content_top">
                            <div class="form_content_top_title pb_0">
                                <h3 className="mb_0">Team Information</h3>
                            </div>
                        </div>
                        <TeamForm />
                        <TeamForm />
                        <TeamForm />
                    </div>
                </div>
                <div className="footer">
                    <FormFooter  step = {6} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Step6