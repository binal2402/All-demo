function Student(p)
{
    console.log(p.name)
    return(
        <div>
            <h1>name : {p.name}</h1>
            <h4>Email : {p.email}</h4>
            {/* <h5>address : {p.other.address}</h5> */}

        </div>
    )
}
export default Student;