import React, { useState } from 'react'
import { TfiMenu } from "react-icons/tfi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const FilterPanel = () => {

    const [selectedOption, setSelectedOption] = useState("Name");
    const [numbers, setNumbers] = useState(12);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNumbers = (e) => {
        setNumbers(e.target.value);
    }
    return (

        <>
            <div className="filterPanel  w-[1069px] h-[62px] border-2 border-[#F1F3F4] bg-[#F6F7F8] flex justify-between px-5 mt-5 items-center ">
                <div className="totalItem"><span className='pr-2'>13</span> Items</div>
                <div className="sort">
                    <label>
                        Short By
                        <select className='mx-5' value={selectedOption} onChange={handleChange}>
                            <option value="">Name</option>
                            <option value="option2">Price</option>
                            <option value="option3">Popularity</option>
                        </select>
                    </label>
                </div>
                <div className="show  ">
                    <label>
                        Show
                        <select className='mx-5 w-20' value={numbers} onChange={handleNumbers}>
                            <option value="">12</option>
                            <option value="option2">15</option>
                            <option value="option3">20</option>
                        </select>
                    </label>
                </div>
                <div className='switch flex  gap-4'>
                    <span className='text-[#40BFFF] w-[24px] h-[21px] '><TfiLayoutGrid3Alt /></span>
                    <span className='text-[#C1C8CE] w-[22px] h-[17px]'><TfiMenu /></span>
                </div>
            </div>
        </>
    )
}

export default FilterPanel
