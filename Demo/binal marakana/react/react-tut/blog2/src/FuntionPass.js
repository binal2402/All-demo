import React from 'react';
function User(props)
{
    return(
        <div>
            <h1>user Component</h1>
            <button onClick={props.data}>call data</button>
        </div>
    )
}
export default User;