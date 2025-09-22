import React from 'react'
import PosterShoes from '../assets/PosterShoes.png'


const Poster = () => {
    return (
        <>
            <div className="poster w-[1069px] h-[350px] border-2 bg-[#40BFFF] border-blue-400 mt-[20px] text-white flex gap-10 justify-center items-center p-5 ">
                <section className='text w-[390px] h-[135px]'>
                    <div className='text-3xl font-semibold '>
                        Adidas Man Running Sneakers
                    </div>
                    <div className="smtext">Performance and design. Taken to the edge.</div>
                    <div className="shopNow"><a>Shop Now</a></div>
                </section>
                <section className='image w-[442px] h-[221px]'><img src={PosterShoes} alt="img" /></section>
            </div>
        </>
    )
}

export default Poster
