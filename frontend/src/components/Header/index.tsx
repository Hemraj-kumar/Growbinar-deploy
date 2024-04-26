import React from 'react'
import grow_logo_full from "../../assets/images/Grow_logo_full.png"
import search from "../../assets/images/Search.svg"
import '../Header/index.css';
import notify from "../../assets/images/notify.svg";

export default function Header() {
  return (
      <div className='flex items-center justify-between'>
        
        <span className='logo-container'>
        <img  src={grow_logo_full} alt='Growbinar logo'/>
        </span>

        <div className='mx-auto flex items-center mb-[14px]'>
          <span className='relative'>
            <input type='search' className='bg-transparent w-64 h-[40px] rounded-lg border hover:border-gbpurple text-navtext p-3'
                placeholder='Search mentors'
              />  
            <img className='absolute right-[10.5px] top-[8px] cursor-pointer' src={search} alt='search icon'/> 
          </span>
          <img className='hover:bg-hoverpurple hover-shadow-lg transition 
          duration-300 p-2 rounded-full cursor-pointer ml-2' src={notify} alt='notification icon '/>
          <div className='w-[250px]'></div>
        </div>
        </div>
  )  
}
