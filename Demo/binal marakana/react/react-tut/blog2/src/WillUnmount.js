import React from 'react';
class WillUnmounts extends React.Component
{
    componentWillUnmount()
    {
        console.log("componentWillUnmount");
    }
    render()
    {
        return(
            <div>
                <h1>Member Component</h1>
            </div>
        )
    }
    
}
export default WillUnmounts;