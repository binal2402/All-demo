import React from 'react';
function Member(props)
{
    return(
        <div>
            <h1>Member Component</h1>
            <button onClick={props.data}>call data</button>
        </div>
    )
}
export default  Member;