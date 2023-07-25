import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import Footer from "../../layout/Footer";
import FormHeader from './FormHeader'
import Dropdown from '../../components/Dropdown';
import FormFooter from './FormFooter';
import service from '../../common/service';
import { useDispatch, useSelector } from 'react-redux';
let sub


const TextAreaDropdown = (props) => {
    const { label, values, options } = props
    return (
        <div className="form_content_questions_inner">
            <div className="field_row_inner">
                <div className="sd_flex sd_flexwrap">
                    <div className="question_title">
                        <label >{label}</label>
                    </div>
                    <Dropdown name={values.dropName} value={values.dropValue} options={options} onChange={props.onChange} />
                </div>
                <div className="field_input relative">
                    <textarea name={values.textName} value={values.textValue} onChange={(e) => props.onChange(e)}> </textarea>
                </div>
            </div>
        </div>
    )
}


function Step8() {
    const apiServe = new service();
    const dispatch = useDispatch();
    const ProjectInfo = useSelector(e => e.ProjectInfo);


    const [state] = useState({
        Flag: ['Yes', 'No'],


    })
    const [historyOfFilm, setHistoryOfFilm] = useState({
        awardWinFlag: ProjectInfo.historyOfFilm.awardWinFlag,
        awardWinNote: ProjectInfo.historyOfFilm.awardWinNote,
        acquiredForUSFlag: ProjectInfo.historyOfFilm.acquiredForUSFlag,
        acquiredForUSNote: ProjectInfo.historyOfFilm.acquiredForUSNote,
        instituteLabGrantFlag: ProjectInfo.historyOfFilm.instituteLabGrantFlag,
        instituteLabGrantNote: ProjectInfo.historyOfFilm.instituteLabGrantNote
    })
    const form8 = [
        {
            GROUP: {
                dropName:'awardWinFlag',
                textName:'awardWinNote',
                textValue:historyOfFilm.awardWinNote,
                dropValue:historyOfFilm.awardWinFlag
            },
            options: state.Flag,
            textLabel: 'Has your film/project screened at other festivals? Please name the festival, and if applicable, the name of any award(s) won.',
        },
        {
            GROUP: {
                dropName:'acquiredForUSFlag',
                textName:'acquiredForUSNote',
                textValue:historyOfFilm.acquiredForUSNote,
                dropValue:historyOfFilm.acquiredForUSFlag
            },
            options: state.Flag,
            textLabel: 'Has your film/project been acquired for U.S. or international distribution? If so, by which distributor? When will its theatrical run begin?',
        },
        {
            GROUP: {
                dropName:'instituteLabGrantFlag',
                textName:'instituteLabGrantNote',
                textValue:historyOfFilm.instituteLabGrantNote,
                dropValue:historyOfFilm.instituteLabGrantFlag
            },
            options: state.Flag,
            textLabel: 'Was your film/project or its artist(s) supported by a Sundance Institute lab, grant, or other program prior to its selection for the Festival? If yes, please explain.',
        }
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setHistoryOfFilm({ ...historyOfFilm, [name]: value })
    }



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
    const onFormSave = () => {
        const data = {
            historyOfFilm: historyOfFilm,
            projectId: ProjectInfo._id,
            savePageNo: '8'
        }
        apiServe.sendevent('paf|project|allUpdate', data)
    }
    return (
        <div>
            <Header />
            <FormHeader />
            <div className="container step2 step_eight step_common">

                <div className="form_content">
                    <div className="form_content_top">
                        <div className="form_content_top_title pb_0">
                            <h3>History of Film/Project</h3>
                        </div>
                    </div>
                    {
                        form8.map((data, index) => {

                            return (
                                <div className="form_content_questions">
                                    <div className="form_content_questions_inner">
                                        <div>
                                            <TextAreaDropdown label={data.textLabel} values={data.GROUP} options={data.options} onChange={handleChange} />
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }
                </div>


                <div className="footer">
                    <FormFooter step={8} onFormSave={onFormSave} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Step8