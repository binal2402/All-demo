import {useState} from 'react'

function State(){
    const [data,setData]=useState("binal")
    function UpdateData()
    {
        setData("Patel")
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={UpdateData}>update data</button>
        </div>
    );
    
}
export default State;