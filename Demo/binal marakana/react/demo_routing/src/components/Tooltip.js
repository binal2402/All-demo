import React from 'react';

// React Tooltip - Package
import ReactTooltip from 'react-tooltip';

function Tooltip({ data, customClass, id, place, html, data_top, onClick,width }) {
    return (
        <>
            {
                <button className={`sd_question_button ${customClass}`} data-tip={data} data-html={html} data-place={place} data-for={id}>
                    <img src="/images/question_help.svg" alt="" title="" style={{width:`${width ? width+'px' :'18px'}`}} />
                    <ReactTooltip id={id} html={html} clickable={true} offset={{ top: data_top ? data_top : -10 }} effect="solid" globalEventOff="scroll" />
                </button>
            }
        </>
    )
}

export default Tooltip;
