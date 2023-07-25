import React from 'react'
import FolderRight from '../../icons/FolderRight';
import ArrowIcon from '../../icons/ArrowIcon';
import ArrowIconBack from '../../icons/ArrowIconBack';
import { useHistory } from "react-router-dom";
function FormFooter(props) {
    const histroy = useHistory();
    const {  checkValidate, onFormSave } = props

    const checkValidation = () => {
        if (props.step === 7 || props.step === 8) {
            histroy.push(`/step${props.step + 1}`);
        } else {
            if (checkValidate()) {
                histroy.push(`/step${props.step + 1}`);

            }
        }
    }
    return (
        <div className='form_footer'>
            <div className='left_side sd_p_cursor'>
                <div className='icon'><FolderRight /></div>
                <div className='text' onClick={onFormSave}>Save</div>
            </div>
            <div className='right_side'>
                <div className='btn'><button className="sd_p_cursor"><ArrowIconBack className='back' />Back</button></div>
                <div className='btn'><button className="sd_p_cursor" onClick={() => { checkValidation() }}>Next<ArrowIcon className='next' /></button></div>
            </div>
        </div>
    )
}

export default FormFooter
