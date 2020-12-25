import React ,{} from 'react'

const User=(props)=>{
    console.log(props)
    const {data} = props
    return(
        <div>
            <h1>User Component</h1>
            <h6>User name is {data.name}</h6>
            <h6>User age is {data.age}</h6>
        </div>
    )
}
export default User;