import { useState } from "react"

function IfElse(){
    const [loggedIn,setLoggedIn] = useState(3)
    return(
        <div>
            {/* if_else */}
            {/* {loggedIn?<h1>welcome binal</h1>:<h1>welcome other</h1>}  */}

            {/* if_else_if */}
            {loggedIn==1?<h1>welcome user 1</h1>:loggedIn==2?<h1>welcome user 2</h1>:<h1>welcome user 3</h1>}
        </div>
    )
}
export default IfElse;