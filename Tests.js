import React, { useEffect } from 'react'
import axios from 'axios';
 
export const Tests = () => {

    useEffect(()=>{
        axios.get('https://reqres.in/api/users/2').then(
            response=>console.log(response.data)
        ).catch(error=>console.log("some error"))
    },[])

    
  return (
    <div>test</div>
  )
}
