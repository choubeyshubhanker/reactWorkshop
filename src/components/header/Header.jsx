import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    const [searchBoxVisible, setSearchBoxVisible] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("");

    console.log("search keyword", searchKeyword);

    const handleSearch = () => {
        setSearchBoxVisible(!searchBoxVisible)
    }

  return (
    <div className=' px-7.5 z-10 fixed top-0 left-0 right-0 px-7.5 h-48 pb-9 flex justify-between bg-gradient-to-b from-dark from-50% to-transparent text-lg'>
        <div className='h-full flex items-center gap-2'>
        <FaArrowLeft className='text-white'/>
        <p className='text-white font-titillium font-'>Romantic Comedy</p>
        </div>
        <div className='h-full flex items-center gap-2 w-auto'>
            <input className = {`${!searchBoxVisible?"hidden":""} rounded-sm `} value={searchKeyword} type="search" name="search" id="search" onBlur={()=>setSearchBoxVisible(false)} onChange={(e)=> setSearchKeyword(e.target.value)} />
            <FaSearch className='text-white' onClick={handleSearch}/>
        </div>
    </div>
  )
}

export default Header