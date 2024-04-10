import React from 'react'
import { B } from './B'
const A = (props) => {
  return (
    <div>
        {props.name}<B name={props.name}></B>
        </div>
  )
}
export default A;