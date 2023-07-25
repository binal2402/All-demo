import React, { useState } from 'react';
// Layouts
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
// PAF Header
import FormHeader from "./FormHeader";
import Dropdown from '../../components/Dropdown';
import PlusFieldIcon from '../../icons/PlusFieldIcon';
import RemoveFieldIcon from '../../icons/RemoveFieldIcon';
import TextField from '../../components/TextField';
import DropdownQuestion from '../../components/DropdownQuestion';
import TextArea from '../../components/TextArea';
import Checkbox from '../../components/Checkbox';

import FormSubmitFooter from './FormSubmitFooter'
import { Link } from "react-router-dom";

function Step9() {
    const adobecheck = useState([
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

    const ActionDropDown = ({ question, sublabel }) => {
        return (
            <div className="question sd_flex">
                <div className="question_label">
                    <p>{question}</p>
                    <span className="sd_textuppercase">{sublabel}</span>
                </div>
                <div className="question_dropdown">
                    <div className="question_dropdown_inner sd_flex">
                        <div className="">
                            <Dropdown options={["Option1", "Option2"]} />
                            <div className="border_select">
                                <Dropdown options={["Type1", "Type2"]} />
                            </div>
                        </div>

                        <div className="sd_flex action_wrap">
                            <span className="sd_p_cursor">
                                <PlusFieldIcon />
                            </span>
                        </div>
                    </div>
                    <div className="question_dropdown_inner sd_flex">
                        <div className="">
                            <Dropdown options={["Option1", "Option2"]} />
                            <div className="sd_form_group border_select">
                                <Dropdown options={["Type1", "Type2"]} />
                            </div>
                            <div className="sd_form_group border_select">
                                <TextField placeholder="Please enter model" />
                            </div>
                        </div>

                        <div className="sd_flex action_wrap">
                            <span className="sd_p_cursor">
                                <PlusFieldIcon />
                            </span>
                            <span className="sd_p_cursor">
                                <RemoveFieldIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='step2 step_common'>
            <Header />
            <FormHeader />
            <div className='container form_inner'>
                <div className="form_content">
                    <div className="form_content_top">
                        <div className="form_content_top_title">
                            <h3>Production Questions</h3>
                            <p>The Sundance Film Festival's official sponsors and partners would love to hear if you have utilized their products or services.  Your answers also provide the Sundance Instutute with valuable information on current practices and tools.</p>
                        </div>
                    </div>
                    <div className="form_content_questions">
                        <div className="form_content_questions_inner">
                            <ActionDropDown question="Please enter your cameras " sublabel="sublabel" />

                            <DropdownQuestion question="Did you purchase or rent this camera?" />
                            <DropdownQuestion question="Did you use an Anamorphic or Special Lense?" />

                            <ActionDropDown question="Please enter your cameras " sublabel="sublabel" />

                            <DropdownQuestion question="Influenced camera selection for your project?" />
                            <DropdownQuestion question="Which software was used to edit your film?" extrafield={true} />
                            <DropdownQuestion question="Did you use Adobe Creative Cloud software for any of the pre-production, production, post-production or marketing of your film?" />

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

                            <DropdownQuestion question="What primary computer hardware did you use to complete your film?" />
                            <DropdownQuestion question="What other technology—hardware or software, did you use to produce your film?" suggestion={true} />
                            <DropdownQuestion question="Did you use 3D real-time tools/engines in the making of this experience?" />

                            <div className="no_border">
                                <DropdownQuestion question="Did you use any stock footage in your film?" />
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

                            <DropdownQuestion question="Which creative funding platform did you use to produce your film?" />
                            <DropdownQuestion question="Are you open to sharing distribution data on your project?" />
                            <DropdownQuestion question="Do you have interest in hybrid distribution?" />
                            <div className="no_border">
                                <DropdownQuestion question="Did you use Dropbox during the pkanning, production or distribution of your film/project?" />
                                <TextArea label="Please briefly explain how" uppercase={true} require={true} />
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
                        <FormSubmitFooter />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default Step9;