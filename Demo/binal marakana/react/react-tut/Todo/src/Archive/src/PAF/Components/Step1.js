import React, { useEffect, useRef, useState } from 'react';
// Layouts
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
// PAF Header
import FormHeader from "./FormHeader";
import FormSubmitFooter from "./FormSubmitFooter";
import TextField from "../../components/TextField";
import Tooltip from "../../components/Tooltip";
import Dropdown from "../../components/Dropdown";
import PlusFieldIcon from "../../icons/PlusFieldIcon";
import RemoveFieldIcon from '../../icons/RemoveFieldIcon';
import FullName from "../../PAF/Components/FullName";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTRIES } from '../../common/constant'
import SimpleReactValidator from 'simple-react-validator';
import service from '../../common/service';
import ArrowIcon from '../../icons/ArrowIcon';

let sub
const Step1 = () => {
    const COUNTRIES_LIST = COUNTRIES
    const ProjectInfo = useSelector(e => e.ProjectInfo);
    const dispatch = useDispatch();
    const history = useHistory()
    const ProjectGetDetail = useSelector(e => e.projectGetDetail);
    const apiServe = new service();
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const Validator = useRef(new SimpleReactValidator({
        autoForceUpdate: this,
        validators: {
            CFirstLast: {  // name the rule
                message: 'First and Last Name are required',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
            },
            title: {  // name the rule
                message: 'Title is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
            },
            synopsis: {  // name the rule
                message: 'Synopsis is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
            },
            filmProjectType: {  // name the rule
                message: 'Film / Project Type is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
            },
            country: {  // name the rule
                message: 'Country of Origin is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
            },
        }
    }))
    const [formOne, setFormOne] = useState({
        title: ProjectInfo.title,
        article: ProjectInfo.article,
        countryOfOrigin: ProjectInfo.countryOfOrigin ? ProjectInfo.countryOfOrigin : [{ id: toString(Math.random), country: '' }],
        filmProjectType: ProjectInfo.filmProjectType,
        credits: ProjectInfo.credits,
        synopsis: ProjectInfo.synopsis,
        englishPhonetcProdununciation: ProjectInfo.englishPhoneticProdununciation,
        projectId: ProjectInfo._id
    })
    const [isSubmitted, setIsSubmitted] = useState(ProjectInfo.submitNo)
    const [synopsisValidation, setSynopsisValidation] = useState(false)
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
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'synopsis') {
            value.split(' ').length <= 50 ? setSynopsisValidation(false) : setSynopsisValidation(true)
        }

        setFormOne({ ...formOne, [name]: value })
        console.log('value-=-=-=>', formOne);
    }
    const selectCountryOfOrigin = (e, id) => {
        let countries = formOne.countryOfOrigin
        countries.forEach(country => { if (country.id === id) country.country = e.target.value });
        setFormOne({
            ...formOne,
            countryOfOrigin: countries
        })
        // forceUpdate()
    }

    const addCountry = () => {
        let countries = formOne.countryOfOrigin;
        var newAdded = {
            id: new Date().getTime().toString(),
            country: ''
        }
        countries.push(newAdded);
        setFormOne({
            ...formOne,
            countryOfOrigin: countries
        })
    }

    const removeCountry = (id) => {
        var countryTypes = formOne.countryOfOrigin.filter(_ => _.id !== id)
        setFormOne({
            ...formOne,
            countryOfOrigin: countryTypes
        })
    }

    const handleCredit = (id, CREDIT_TYPE, TYPE) => {
        const creditIndex = ProjectGetDetail.filmcreditLabels.findIndex(_ => _.name === CREDIT_TYPE)
        formOne.credits.forEach(item => {
            if (item.creditId === ProjectGetDetail.filmcreditLabels[creditIndex]._id) {
                if (TYPE === "ADD") {
                    let newAdded = {
                        _id: new Date().getTime().toString(),
                        firstName: '',
                        middleName: '',
                        lastName: '',
                    }
                    item.creditType.push(newAdded)
                } else {
                    item.creditType = item.creditType.filter(_ => _._id !== id)
                }
            }
        });
        forceUpdate()

    }

    const onChangeCredit = (e, CID, IID) => {
        // const creditIndex = ProjectGetDetail.filmcreditLabels.findIndex(_ => _.name === CREDIT_TYPE)
        let newCredit = formOne.credits
        newCredit.forEach(credit => {
            if (credit._id === CID) {
                credit.creditType.forEach(data => {
                    if (data._id === IID) {
                        const { name, value } = e.target
                        data[name] = value
                    }
                })
            }
        });
        forceUpdate()
    }
    const onSubmit = (e, STEP) => {
        if (Validator.current.allValid() && !synopsisValidation) {
            history.push(`step${STEP + 1}`)
        } else {
            Validator.current.showMessages()
            forceUpdate()
        }
    }
    const onFormSave = () => {
        if (Validator.current.allValid() && !synopsisValidation) {
            const data = {
                savePageNo: '1',
                title: formOne.title,
                article: formOne.article,
                countryOfOrigin: formOne.countryOfOrigin,
                filmProjectType: formOne.filmProjectType,
                credits: formOne.credits,
                synopsis: formOne.synopsis,
                englishPhoneticProdununciation: formOne.englishPhoneticProdununciation,
                projectId: formOne.projectId
            }
            apiServe.sendevent('paf|project|allUpdate', data)
            return true
        } else {
            Validator.current.showMessages()
            forceUpdate()
            return false

        }
    }

    const getCredit = (CREDIT_TYPE) => {
        const creditIndex = ProjectGetDetail.filmcreditLabels.findIndex(_ => _.name === CREDIT_TYPE)
        let ADD_LIMIT = CREDIT_TYPE === 'Director' ? 4 : CREDIT_TYPE === 'Cast' ? 6 : 3
        return formOne.credits.map((item, i) => {
            return (
                <>
                    {item.creditId === ProjectGetDetail.filmcreditLabels[creditIndex]._id ?
                        item.creditType.map((credit, i) => {
                            return (
                                <>
                                    <div className="sd_flex sd_aligncenter associate_list">
                                        <FullName disabled={isSubmitted >= 1 ? true : false} credit={credit} item={item} onChange={onChangeCredit} values={credit} title={`${CREDIT_TYPE === 'Cast' ? "Principal Cast Member" : CREDIT_TYPE} ${i + 1}`} />
                                        {isSubmitted >= 1 ? '' : <div className="sd_flex add_remove_icon">
                                            <span className='sd_p_cursor' style={{ cursor: item.creditType.length > ADD_LIMIT - 1 ? 'not-allowed' : 'pointer' }} onClick={() => item.creditType.length < ADD_LIMIT ? handleCredit(credit._id, CREDIT_TYPE, 'ADD') : ''}><PlusFieldIcon /></span>
                                            {i !== 0 && < span className='sd_p_cursor' onClick={() => handleCredit(credit._id, CREDIT_TYPE, 'SUB')} > <RemoveFieldIcon /></span>}
                                        </div>}
                                    </div>
                                    <span style={{ color: 'red' }}>{Validator.current.message('firstName', credit.firstName && credit.lastName, 'CFirstLast|required')}</span>
                                </>
                            )
                        })
                        : ''}
                </>)
        })
    }
    return (
        <div>
            <Header />
            <FormHeader step='1' />
            <div className="form_inner step_1 step_common">
                <div className="container">
                    <div className="f_step_1_heading sd_flex sd_justbetween">
                        <div className="f_step_1_left_title">
                            Please have all of your film/project information with you before you begin.
                        </div>
                        <div className="f_step_1_right_desc">
                            <p>After you submit, you cannot return to this form to make changes. For change requests, email your dedicated Artist Relations Liaison and Festival Publicist.</p>
                            <p>Publicity and marketing materials will be provided to third-party groups, may be used on all Sundance Institute websites, blogs, and print publications before and after the Festival, and will be placed in the Sundance Institute Archives.</p>
                        </div>
                    </div>
                    <div className="film_deatil_form">
                        <div className="form_inner_title">
                            <h3 className="sd_flex sd_aligncenter">Film/Project Title
                                <Tooltip id="accessibility" customClass="tooltip-button tooltip-short-program" data="Film/Project Title" place="right" data_top={25} />
                            </h3>
                        </div>
                        <div className="film_deatil_form_inner">
                            <div className="sd_flex f_detail_f_row sd_justbetween">
                                <TextField disabled={isSubmitted >= 1 ? true : false} uppercase={true} label="article" name="article" value={formOne.article} handleChange={handleChange} required="false" />
                                <TextField disabled={isSubmitted >= 1 ? true : false} uppercase={true} label="Title" name="title" value={formOne.title} handleChange={handleChange} errorValidation={Validator.current.message('title', formOne.title, 'title|required')} required="false" />
                            </div>
                            <div className="sd_flex f_detail_s_row sd_justbetween">
                                <Dropdown disable={isSubmitted >= 1 ? true : false} uppercase={true} name="filmProjectType" onChange={handleChange} label="Film/Project Type" fpgerror={Validator.current.message('filmProjectType', formOne.filmProjectType, 'filmProjectType|required')} options={ProjectGetDetail.pafProjectType} value={formOne.filmProjectType} />
                                <TextField disabled={isSubmitted >= 1 ? true : false} uppercase={true} label="English Phonetic Pronunciation" required="false" />
                            </div>
                            {formOne.countryOfOrigin.map((item, i) => {
                                return (
                                    <>
                                        <div className="sd_flex sd_aligncenter f_detail_country_row">
                                            <Dropdown disable={isSubmitted >= 1 ? true : false} onChange={selectCountryOfOrigin} name='Country of Origin' value={item.country ? item.country : ''} uppercase={true} optionID={item.id} label="Country of Origin" options={COUNTRIES_LIST} />
                                            {isSubmitted >= 1 ? '' : <div className="sd_flex add_remove_icon">
                                                {i === 0 ?
                                                    <span className='sd_p_cursor' style={{ cursor: formOne.countryOfOrigin.length > 3 ? 'not-allowed' : 'pointer' }} onClick={(e) => formOne.countryOfOrigin.length < 4 ? addCountry(e) : ''}><PlusFieldIcon /></span>
                                                    :
                                                    <>
                                                        <span className='sd_p_cursor' style={{ cursor: formOne.countryOfOrigin.length > 3 ? 'not-allowed' : 'pointer' }} onClick={(e) => formOne.countryOfOrigin.length < 4 ? addCountry(e) : ''}><PlusFieldIcon /></span>
                                                        <span className='sd_p_cursor' onClick={() => removeCountry(item.id)}><RemoveFieldIcon /></span>
                                                    </>
                                                }
                                            </div>}
                                        </div>
                                        <span style={{ color: 'red' }}>{Validator.current.message('Country of Origin', item.country, 'country|required')}</span>
                                    </>)
                            })}

                        </div>
                    </div>
                    <div className="associate_people">
                        <div className="form_inner_title">
                            <h3 className="sd_flex sd_aligncenter">Associated People</h3>
                        </div>
                        <div className="ass_container_990">
                            <div className="form_inner_sub_title sd_flex sd_aligncenter">
                                <h5>Director(s)</h5>
                                <p>List in desired order for all places where credits appear. Up to 4.</p>
                            </div>
                        </div>
                        {
                            getCredit('Director')
                        }
                        <div className="ass_container_990">
                            <div className="form_inner_sub_title sd_flex sd_aligncenter mt-25">
                                <h5>Screenwriter(s)</h5>
                                <p>List in desired order for all places where credits appear. Up to 3.</p>
                            </div>
                        </div>
                        {
                            getCredit('Screenwriter')
                        }
                        <div className="ass_container_990">
                            <div className="form_inner_sub_title sd_flex sd_aligncenter mt-25">
                                <h5>Producer(s)
                                    <Tooltip id="accessibility" customClass="tooltip-button tooltip-short-program" data="Film/Project Title" place="right" data_top={25} />
                                </h5>
                            </div>
                        </div>
                        {
                            getCredit('Producer')
                        }
                        <div className="ass_container_990">
                            <div className="form_inner_sub_title sd_flex sd_aligncenter mt-25">
                                <h5>Principal Cast Member(s)</h5>
                                <p>List in desired order for all places where credits appear. Up to 6.</p>
                            </div>
                        </div>
                        {
                            getCredit('Cast')
                        }
                    </div>
                    <div className="synopsis_form">
                        <div className="form_inner_title">
                            <h3 className="sd_flex sd_aligncenter">Synopsis</h3>
                            <p>Below is a brief synopsis of your film/project, based on your original description, and drafted in our house style by our PR and programming teams. We strongly recommend using this version; please feel free to recommend an edit for us below if there are any factual errors or inaccuracies.</p>
                        </div>
                        <div className="ass_container_990">
                            <div className="field_row_inner">
                                <label>Max 50 Words  </label>
                                <div className="field_input relative">
                                    <textarea disabled={isSubmitted >= 1 ? true : false} value={formOne.synopsis} onChange={(e) => handleChange(e)} name='synopsis' />
                                </div>
                                <span style={{ color: 'red' }}>{synopsisValidation ? 'More than 50 Word is not allowed' : Validator.current.message('synopsis', formOne.synopsis, 'synopsis|required')}</span>
                                <div className="textarea_word sd_flex sd_aligncenter">
                                    <label>Word Count</label>
                                    <span>{formOne.synopsis.split(" ").length}/50</span>
                                </div>
                            </div>
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
                    {isSubmitted >= 1 ? <div className='form_footer'>
                        <div className='right_side'>
                            <div className='btn'><button className="sd_p_cursor" onClick={(e)=>{history.push('/step2')}}>Next<ArrowIcon className='next' /></button></div>
                        </div>
                    </div> : <FormSubmitFooter projectId={formOne.projectId} onFormSave={onFormSave} onSubmit={onSubmit} step={1} />}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Step1
