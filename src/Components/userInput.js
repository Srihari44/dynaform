import React from 'react'
import '../App.css';

const userInput = (props) => {
        return (
            <input  onChange={props.changed} value={props.value}/>
        )
}

export default userInput;