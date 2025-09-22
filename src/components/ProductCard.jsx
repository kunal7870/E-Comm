import React from 'react'
import s1 from '../assets/s1.png'
import Rating from './Rating'
const ProductCard = () => {
    return (
        <>
            <div className='productCard w-[328px] h-[408px] mt-5 flex flex-col gap-2 items-center shadow-sm'>
                <img className='w-[326.37px] h-[286.55px]' src={s1} alt="" />
                <text className='text-[#223263] font-bold'> Nike Air Max 270 React</text>
                <Rating/>
                <price className='flex gap-2'> <span className='text-[#40BFFF]'>$299,43</span> <span className='text-[#9098B1] '>$534,33</span> <span className='text-[#FB7181]'>24% Off</span></price>

            </div>
        </>
    )
}

export default ProductCard

