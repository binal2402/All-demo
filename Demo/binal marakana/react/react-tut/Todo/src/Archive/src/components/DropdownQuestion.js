import React from 'react'
import Dropdown from './Dropdown'
import TextArea from './TextArea'

function DropdownQuestion(props) {
    const {question,extrafield,suggestion} = props
    return (
        <div className="question sd_flex">
            <div className="question_label">
                <p>{question}</p>
            </div>
            <div className="question_dropdown">
                <div className="question_dropdown_inner sd_flex">
                    <div className="">
                        <Dropdown options={["Option1","Option2"]}  />
                        {
                            extrafield ? <div className="mt_10"> <TextArea placeholder="Please enter software used" /> </div>: ''
                        }
                    </div>
                    {suggestion ? <span className="sd_textuppercase not_appliocable">If not applicable, add N/A</span> : ''}
                </div>
            </div>
        </div>
    )
}
export default DropdownQuestion