import React, { useEffect } from 'react'
import Header from '../../layout/Header'
import Footer from "../../layout/Footer";
import FormHeader from './FormHeader'
import TextArea from '../../components/TextArea';
import Dropdown from '../../components/Dropdown';
import FormFooter from './FormFooter';
import Tooltip from '../../components/Tooltip';
import { useState } from 'react';

import service from '../../common/service';
import { useDispatch, useSelector } from 'react-redux';
let sub
const Step7=()=> {
    
    const apiServe = new service();
    const dispatch = useDispatch();
    const ProjectInfo = useSelector(e => e.ProjectInfo);
    const [state] = useState({
        studentscreening:['Yes','No'],
        ScreeningsandTickets:['Yes','No'],
     })
    const [CommunityAudiences, setCommunityAudiences] = useState({
        freeCommunityScreening: ProjectInfo.freeCommunityScreening,
        studentScreening: ProjectInfo.studentScreening,
    })
    useEffect(() => {
        sub = apiServe.getevent().subscribe((response) => {
            switch (response.event) {
                case "paf|project|allUpdate":
                    if (!response.error) {
                        dispatch({ type: 'FORM_DATA', payload: response.data })
                    }
                    break;
                default:
                    break;
            }
        })
        return () => {
            sub.unsubscribe()
        }
        // eslint-disable-next-line
    }, [])
    const handleChangeStudent=(e)=>{
        const { name, value } = e.target
        setCommunityAudiences({...CommunityAudiences,studentScreening : { ...CommunityAudiences.studentScreening, [name]: value }})
       
    }
    const handleChangeCommunity=(e)=>{
        const { name, value } = e.target
        setCommunityAudiences({...CommunityAudiences, freeCommunityScreening:{ ...CommunityAudiences.freeCommunityScreening, [name]: value }})
       
    }
    const onFormSave = () => {
            const data = {
                freeCommunityScreening: CommunityAudiences.freeCommunityScreening,
                studentScreening: CommunityAudiences.studentScreening,
                projectId:ProjectInfo._id,
                savePageNo:'7'
            }
            apiServe.sendevent('paf|project|allUpdate', data)
    }
    
    return (
        <div>
            {console.log(CommunityAudiences)}
            <Header />
            <FormHeader />
                <div className="container step2 step_eight step_common">
                    <div className="form_content">
                        <div className="form_content_top">
                            <div className="form_content_top_title border_bottom_2">
                                <h3>Student and Community Audiences</h3>
                                <h4>Community Engagement Program</h4>
                                <p>Reach beyond the typical Sundance Film Festival attendee and interact with engaged local audiences, including minoritized communities  who may identify with your subject matter or young film fans who are excited to experience independent cinema for the first time.</p>
                            </div>
                        </div>
                           
                        <div className="form_content_questions">
                            <div className="form_content_questions_inner">
                                <div className="form_screening">
                                    <h4 className="tooltip_title">Utah Student Screenings 
                                    <Tooltip id="accessibility" customClass="tooltip-button tooltip-short-program" data="Film/Project Title" place="right" width={13} data_top={25}
                                    /></h4>
                                    <div className="field_row_inner">
                                        <div className="sd_flex sd_flexwrap">
                                            <div className="question_title">
                                                <label>Would you like your film to be in the student screening program, AND is your film appropriate for 13–18-year-olds? </label> 
                                                <span className="sd_textuppercase">(The director or another team member must participate.)</span>
                                            </div>
                                            <Dropdown options={state.studentscreening} onChange={handleChangeStudent} name="flag" value={CommunityAudiences.studentScreening.flag}/>
                                        </div>
                                        <div className="form_screening_note">
                                            <TextArea label="Please note if your film includes strong language, substance abuse, violence, sex scenes, and/or nudity." name="note" value={CommunityAudiences.studentScreening.note} handleChange={handleChangeStudent}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="form_content_questions">
                            <div className="form_content_questions_inner">
                                <div className="form_screening">
                                    <h4 className="tooltip_title">Free Utah Community Screenings and Tickets
                                    <Tooltip id="accessibility" customClass="tooltip-button tooltip-short-program" data="Film/Project Title" place="right" width={13} data_top={25}
                                    /></h4>
                                    <div className="field_row_inner">
                                        <div className="sd_flex sd_flexwrap">
                                            <div className="question_title">
                                                <label>Would you like your film to be considered for the program? </label> 
                                                <span className="sd_textuppercase">(The director or another team member must participate.)</span>
                                            </div>
                                            <Dropdown options={state.ScreeningsandTickets} name="flag" value={CommunityAudiences.freeCommunityScreening.flag} onChange={handleChangeCommunity}/>
                                        </div>
                                        <div className="form_screening_note">
                                            <TextArea label="Are there particular kinds of organizations or social or demographic communities that may especially connect with your film? " name="note" value={CommunityAudiences.freeCommunityScreening.note}  handleChange={handleChangeCommunity}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
                    <div className="footer">
                        <FormFooter step={7} onFormSave={onFormSave} />
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Step7;