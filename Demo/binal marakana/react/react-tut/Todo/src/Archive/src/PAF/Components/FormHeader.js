import React from 'react';
import RightBlackIcon from '../../icons/RightBlackIcon';


function FormHeader(props) {
    return (
        <>
            <div className="form_header sd_relative">
                <div className="sd_large_container">
                    <div className="sd_header_top_title ">
                        <h1 className="sd_textuppercase sd_textcenter">Post Acceptance Form</h1>
                    </div>
                </div>
                <div className="header_timezone sd_flex sd_aligncenter sd_flexwrap">
                    <span className="sd_textuppercase label_timezone" data-uw-styling-context="true">TIMEZONE</span>
                    <div className={`sd_p_cursor sd_flex sd_aligncenter select_timezone ${'active'}`}>
                        <input name="timezoneSelect" disabled="" value="India Standard Time" data-uw-styling-context="true" />
                        <span className="sd_p_cursor">
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none">
                                <path d="M1.29285 0.714355L5.75626 5.00007L10.0071 0.918437" stroke="white" stroke-width="1.218"></path>
                            </svg>
                        </span>
                        <ul>
                            <li data-uw-styling-context="true">Mountain Daylight Time</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="form_steps_list">
                    <ul className="sd_flex">
                        {
                            props.step !== '1' && <>
                                <li className="complete"><span>1</span><p>Program Announcement</p><RightBlackIcon /></li>
                                <li className="current"><span>2</span><p>Credits</p></li>
                                <li><span>3</span><p>Project Info</p></li>
                                <li><span>4</span><p>Contacts</p></li>
                                <li><span>5</span><p>Director(s)  Info</p><RightBlackIcon /></li>
                                <li><span>6</span><p>Team Info</p></li>
                                <li><span>7</span><p>Audiences</p></li>
                                <li><span>8</span><p>History</p></li>
                                <li><span>9</span><p>Production Questions</p><RightBlackIcon /></li>
                            </>}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default FormHeader