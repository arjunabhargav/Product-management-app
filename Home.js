import React from 'react'
import { useParams } from 'react-router-dom'

const Home = () => {
  const {id,name}=useParams()
  return (
    <div>
        {id} {name}
    </div>
  )
}
export default Home