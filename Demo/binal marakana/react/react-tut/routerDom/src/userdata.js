import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import DynamicData from './DynamicData';

function UserData()
{
    let users=[
        {id:1, name:'binal', email:'binal@gmail.com'},
        {id:2, name:'bcd', email:'bcd@gmail.com'},
        {id:3, name:'pqr', email:'pqr@gmail.com'},
        {id:4, name:'abc', email:'abc@gmail.com'},
        {id:5, name:'xyz', email:'xyz@gmail.com'},

    ]
    return(
        <div>
            <Router>
            <h1>React Dynamic</h1>
            {
                users.map((item)=>
                <div>
                    <Link to={"/user/"+item.id+"/"+item.name}><h3>{item.name}</h3></Link>
                </div>
                )
            }
                <Route path="/user/:id/:name"><DynamicData/></Route>
            </Router>
            
        </div>
    )
}
export default UserData;