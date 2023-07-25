import {withRouter} from 'react-router-dom'

function DynamicData(prop)
{
    // console.log(prop.match.param.id)
    return(
        <div>
            <h1>hi this is user no{prop.match.params.id}</h1>
            <h1>hi this is {prop.match.params.name}</h1>
        </div>
    )
}
export default withRouter(DynamicData)