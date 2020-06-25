import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import  './Error404.css'


const Error404 = () => {
  const [state, stateHandler] = useState({
    redirect: false
  })

  useEffect(()=> {
    setTimeout(()=>{
      stateHandler({
        redirect: true
      })
    }, 3000)
  },[])

    return(
        <div className='Wrapper'>
              <h1 className='error'>404</h1>
              <h3>That's not found</h3>
              <p>Redirecting to home page in 3 seconds</p>
               {state.redirect ? <Redirect to='/' /> : null }
            </div>
    )
}

export default Error404;