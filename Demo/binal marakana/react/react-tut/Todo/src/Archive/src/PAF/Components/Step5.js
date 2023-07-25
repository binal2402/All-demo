import React, { useState } from 'react';
// Layouts
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
// PAF Header
import FormHeader from "../../PAF/Components/FormHeader";
import FormSubmitFooter from "./FormSubmitFooter";
import TextField from "../../components/TextField";
import TextArea from "../../components/TextArea";
import Checkbox from "../../components/Checkbox";
import Tooltip from "../../components/Tooltip";
import Dropdown from "../../components/Dropdown";
import FullName from "../../PAF/Components/FullName";
import { Link } from 'react-router-dom';


const DirectorInfo = () => {
    const [adobecheck] = useState([
        {
            name: "None",
            value: "None",
        },
        {
            name: "Premiere Pro",
            value: "Premiere Pro",
        },
        {
            name: "After Effects",
            value: "After Effects",
        },
        {
            name: "Audition",
            value: "Audition",
        },
        {
            name: "Photoshop",
            value: "Photoshop",
        },
        {
            name: "Illustrator",
            value: "Illustrator",
        },
        {
            name: "SpeedGrade",
            value: "SpeedGrade",
        },
        {
            name: "Story",
            value: "Story",
        },
        {
            name: "Adobe Media Encoder",
            value: "Adobe Media Encoder",
        },
        {
            name: "Prelude",
            value: "Prelude",
        },
        {
            name: "Anywhere",
            value: "Anywhere",
        },
        {
            name: "Encore",
            value: "Encore",
        },
        {
            name: "Other",
            value: "Other",
        }
    ])
    return (
        <div >
            <div className="sd_flex sd_aligncenter associate_list">
                <FullName title="Director 1" />
            </div>
            <div className="sd_flex sd_aligncenter associate_list">
                <FullName />
            </div>
            <div className="sd_container_990">
                <div class="field_row_inner">
                    <label className='sd_flex sd_aligncenter'>BIO
                        <Tooltip
                            id="accessibility"
                            customClass="tooltip-button tooltip-short-program"
                            data="Film/Project Title"
                            place="right"
                            data_top={25}
                        />
                    </label>
                    <div class="field_input relative">
                        <TextArea height='225px' />
                    </div>
                    <div className="textarea_word sd_flex">
                        <label className='mb_0'>Word Count</label>
                        <span>00/140</span>
                    </div>
                </div>
            </div>
            <div className="for_padding team_info_section sd_container_990 mb_0 pb_0">
                <div className="sd_flex fullname_div one_field">
                    <TextField type="text" name="Company" label="Company" uppercase />
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
                <div className="sd_flex fullname_div two_field">
                    <Dropdown label="What is Director 1's gender expression?" uppercase options={[]} />
                    <Dropdown label="Does Director 1 identify as Transgender?" uppercase options={[]} />
                </div>
                <div className="sd_flex fullname_div two_field">
                    <Dropdown label="How would Director 1 define their sexual orientation?" uppercase options={[]} />
                    <Dropdown label="Does Director 1 identify as a person with a disability?" uppercase options={[]} />
                </div>
                <div className="sd_flex fullname_div two_field">
                    <Dropdown label="In which country was  Director  1 born?" uppercase options={[]} />
                </div>
                <div className="no_border">
                    <div className="question">
                        <div className="question_label">
                            <p>If any Adobe Products were used on your film, which ones?</p>
                            <span className="sd_textuppercase">Check all that apply.</span>
                        </div>
                        <div className="check_col_2 sd_flex sd_flexwrap">
                            {
                                adobecheck.length > 0 && adobecheck.map((adobelist, i) => {
                                    return (
                                        <Checkbox type="checkbox" name={adobelist?.name} label={adobelist?.name} value={adobelist?.value} id={`adobe_${i}`} />
                                    )
                                })
                            }
                            {/* <TextField type="text" /> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="field_row_inner mb_0">
                        <label className="sd_textuppercase">
                            By providing Twitter and Instagram information, Sundance Film Festival will consider it public and may tag our posts with this information.
                        </label>
                    </div>
                    <div className="sd_flex fullname_div two_field">
                        <TextField type="text" name="City" label="Instagram" uppercase />
                        <TextField type="text" name="state" label="Twitter" uppercase />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Step5() {

    return (
        <div>
            <Header />
            <FormHeader />
            <div className="form_inner step_common  step_1">
                <div className="container">
                    <div className="associate_people pb_0">
                        <div className="form_inner_title">
                            <h3 className="sd_flex sd_aligncenter">Director(s) Information
                                <Tooltip
                                    id="accessibility"
                                    customClass="tooltip-button tooltip-short-program"
                                    data="Film/Project Title"
                                    place="right"
                                    data_top={25}
                                />
                            </h3>
                        </div>
                        <div className='director sd_container_990'>
                            <DirectorInfo />
                        </div>
                        <div className='director sd_container_990'>
                            <DirectorInfo />
                        </div>
                    </div>
                    <div className="privacy_policy_link">
                        <div className="form_inner_title">
                            <h3 className="sd_flex sd_aligncenter">Privacy Policy</h3>
                        </div>
                        <div className="ass_container_990 ">
                            <p>By signing below you are agreeing to <Link>Sundance Institute’s Privacy Policy.</Link></p>
                        </div>
                    </div>
                    <div className="electronic_sign">
                        <div className="form_inner_title">
                            <h3 className="sd_flex sd_aligncenter">Electronic Signature</h3>
                        </div>
                        <div className="ass_container_990 ">
                            <p>
                                On behalf of the film/project owners, I certify that the film/project team agrees that all of the above is true to the best of my knowledge and I am authorized to submit this information for this film/project. I understand that this information will appear in all Festival materials and be provided to third-party groups. I understand and consent that the Festival may makeadditional edits to the information submitted here, for reasons including but not limited to style, grammar and brevity.
                            </p>
                            <p> I agree to indemnify and hold harmless the Institute, its officers, directors, employees and other participants in any of the Institute’s programs from any claim of any type made against the Institute arising from the information I have provided here and/or the project’s participation in the Festival.</p>
                        </div>
                    </div>
                    <FormSubmitFooter  step = {5} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
