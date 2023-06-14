import React from 'react'


const userInput = (props) => {
    console.log(props);
    return (
       <input className='border-pink-700'
       onChange={props.changename} value={props.username}/>
    )
}

export default userInput