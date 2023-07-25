import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import service from '../../common/service';
import ArrowIconBack from '../../icons/ArrowIconBack';
import FolderRight from '../../icons/FolderRight';
import PreviewIcon from '../../icons/PreviewIcon';
import ShareWithTeamIcon from '../../icons/ShareWithTeamIcon';
import FullName from "./FullName";
import Popup from './Popup';
let sub
function FormSubmitFooter(props) {
    const apiServe = new service();
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const { onSubmit, onFormSave, projectId, step } = props
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitDetail, setSubmitDetail] = useState({
        projectId: projectId,
        submitNo: step,
        firstName: '',
        middleName: '',
        lastName: ''
    })
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
        }
    }))
    useEffect(() => {
        sub = apiServe.getevent().subscribe((response) => {
            switch (response.event) {
                case "paf|project|submit":
                    if (!response.error) {
                        setIsSubmitted(true)
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
    const onChangeSubmitDetail = (e) => {
        const { name, value } = e.target
        setSubmitDetail({ ...submitDetail, [name]: value })
    }
    const checkValidation = () => {
        if (Validator.current.allValid() && onFormSave()) {
            apiServe.sendevent('paf|project|submit', submitDetail)
        } else {
            Validator.current.showMessages()
            forceUpdate()
        }
    }
    return (
        <div className="form_footer_submit">
            <div className="form_footer_links sd_flex">
                <Link onClick={onFormSave}><FolderRight /> <span>Save</span></Link>
                <Link><PreviewIcon /> <span>Preview</span></Link>
                <Link><ShareWithTeamIcon /> <span>Share with your team</span></Link>
            </div>
            <FullName onChange={onChangeSubmitDetail} values={submitDetail} />
            <span style={{ color: 'red' }}>{Validator.current.message('firstName', submitDetail.firstName && submitDetail.lastName, 'CFirstLast|required')} </span>
            <div className="form_footer_bottom sd_flex">
                {step !== 1 && <div className='btn'><button><ArrowIconBack className='back' />Back</button></div>}
                <div className='btn'><button onClick={() => { checkValidation() }}>Submit</button></div>
            </div>
            <Popup step={step} onSubmit={onSubmit} submitForm={true} open={isSubmitted} setOpen={setIsSubmitted} title='Are you sure you want to submit?'>
                <p> After you submit, you cannot return to this form to make changes. For change requests, email your dedicated Artist Relations Liaison and Festival Publicist.</p>
            </Popup>
        </div>
    )
}

export default FormSubmitFooter
