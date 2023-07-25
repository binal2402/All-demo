import React from "react";

function Popup({ title, form, open, setOpen, children, submitForm, onSubmit, step }) {
    console.log(title);
    return (
        <React.Fragment>
            {open
                ? <div className="sd_custom_popup">
                    <div className={!submitForm ? "sd_popup_inner" : 'sd_popup_inner sd_submit_inner'} >
                        {!submitForm ? <div className='sd_close_popup' onClick={() => setOpen(false)}><span></span><span></span></div> : ''}
                        {title ? (
                            <div className="sd_popup_header">
                                <h3>{title}</h3>
                            </div>
                        ) : (
                                ""
                            )}
                        {!submitForm ?
                            <>
                                <div className='underline change_margin'>
                                    <div className="sd_popup_content">
                                        {children}
                                    </div>
                                </div>
                                <div className='sd_popup_buttons'>
                                    <button>Add</button>
                                </div>
                            </>
                            :
                            <>
                                <div className="sd_popup_content">
                                    {children}
                                </div>
                                <div className="form_footer_bottom sd_flex sd_justcenter">
                                    <div className='btn'><button onClick={() => setOpen(false)}>Cancle</button></div>
                                    <div className='btn'><button onClick={(e)=>onSubmit(e, step)} >Submit</button></div>
                                </div>
                            </>
                        }
                    </div>
                </div>
                : ''
            }
        </React.Fragment>
    );
}
export default Popup;
