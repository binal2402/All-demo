import React from 'react'

function Step(props) {
    return (
        <div className='step'>
            <span>Step {props.step}</span>
            <pre>{props.step_detail}</pre>
        </div>
    )
}

export default Step
