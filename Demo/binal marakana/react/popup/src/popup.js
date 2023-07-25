import React, { Component } from 'react'

export default class popup extends Component {
    render() {
        return (
            <div>
               <div className="container">  
                <div class="row" className="hdr">  
                    <div class="col-sm-12 btn btn-info">  
                        Show Hide component on Click in React JS App  
                         </div>  
                </div>  
                <div style={{ "marginTop": "10px" }}>  
                    <div class="col-sm-8 btn btn-success" onClick={this.togglebutton}>  
                        {title}  
                    </div>  
                    {open && (  
                        <div>  
                            {children}  
                        </div>  
                    )}  
                </div>  
            </div>  
            </div>
        )
    }
}
