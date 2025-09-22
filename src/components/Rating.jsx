import React, { useState } from 'react'
import star from '../assets/star.png'
import starC from '../assets/star copy 2.png'

const Rating = () => {
    const[rate,setRate] = useState(4);
  return (
    <div className='flex gap-3 '>
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={starC} alt="" />
    </div>
  )
}

export default Rating
