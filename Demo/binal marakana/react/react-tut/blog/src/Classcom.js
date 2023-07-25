import React, { Component } from 'react'

export default class Classcom extends Component
{
    constructor()
    {
        super();
        this.state={
            data:"binal"
        }
    }
    apple()
    {
        this.setState({data:"patel"})
    }
    render()
    {
        return(
            <div>
                <h3>{this.state.data}</h3>
                <button onClick={()=>this.apple()}>CLICK</button>
            </div>
            
        )
    }
}

