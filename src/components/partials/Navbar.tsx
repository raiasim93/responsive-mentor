import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center h-[88px] px-8 2xl:px-[12vw] '>
      <div className="flex gap-x-2  items-center">
         <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M24.459 12.106a.756.756 0 0 1-.307-.065l-6.438-2.883a.751.751 0 0 1 0-1.37l6.438-2.873a.752.752 0 0 1 .991.379.752.752 0 0 1-.38.991l-4.905 2.189 4.906 2.197a.75.75 0 0 1-.305 1.435z" fill="#67BECE"/><path d="M15.686 22.565c-7.078 0-13.266-4.778-15.045-11.62a.749.749 0 1 1 1.451-.378 14.044 14.044 0 0 0 13.594 10.498.75.75 0 0 1 0 1.5z" fill="#3F54A3"/><path d="M13.102 16.336a.75.75 0 0 1-.75-.75V1.33a.75.75 0 0 1 1.5 0v14.257a.75.75 0 0 1-.75.749z" fill="#67BECE"/></g></svg>
        <img src="/partials/images/logo-mobile.svg" alt="" />
         <div className="text-xl tracking-wider ">
          <span className='underline decoration-red-300 decoration-wavy underline-offset-4'> Frontend </span>
          Mentor
        </div>
      </div>
      <div className='flex gap-x-4 items-center font-semibold italic text-sm'>
        <a href='#' className="">LEARNING PATHS</a>
        <a href='#' className="">CHALLENGES</a>
        <a href='#' className="">SOLUTIONS</a>
        <a href='#' className="">ARTICLES</a>
        <a href='#' className="">UNLOCK PRO</a>
        <a href='#' className="py-3 px-8 flex bg-black text-white items-center gap-x-2 rounded-4xl">
          LOG IN WITH GITHUB
         <FontAwesomeIcon className='text-2xl' icon={faGithub} />
        </a>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar