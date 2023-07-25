import React,{useState} from 'react'
import Student from './Props';


function Propsupate(){
    const [name,setName] = useState("binal")
    return(
        <div style={{backgroundColor: "skyblue",margin:10}}>
            <h1>update name</h1>
            <Student name={name}/>

            <button onClick={()=>{setName("Patel")}}>update name</button>
        </div>
    )
}
export default Propsupate;
