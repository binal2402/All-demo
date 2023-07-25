import React from 'react';
class Render extends React.Component
{
    constructor()
    {
        console.log("constructor")

        super();
        this.state={
            // email:"binal@gmail.com"
            count:0
        }
    }

    
    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdate",this.state.count)
       if(this.state.count>5 && this.state.count<10)
       {
           return true;
       }

    }
    render()
    {

        console.log("Render method",this.state.email)
        return(
            <div>
                <h1>Render Component {this.state.count}</h1>
                {/* <button onClick={()=> this.setState({email:"patelbinal@gmail.com"})}>update</button> */}
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>update</button>
            </div>
        )
    }
    
}
export default Render;