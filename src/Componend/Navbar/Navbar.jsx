import { useState } from "react"
import {MdClose} from 'react-icons/md'
import {FaBars} from 'react-icons/fa'

import Logo from '../../assets/logo.svg'

const Navbar = () => {
  const [show , notshow] = useState(false)
  const hide = show ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  const controlbar = () =>{
    notshow(!show)
  }
  return (
  <div className='bg-[#F5F7FA] py-[22px]'>
      <div className="container">
     <div className='flex items-center gap-x-[126.1px]'>
     <div>
            <img src={Logo} alt="Logo" />
        </div>
         <div onClick={controlbar} className="lg:hidden text-[25px] font-semibold text-[#4D4D4D] border-2 border-[#4CAF4F] rounded ml-[50px] sm:ml-[328px] md:ml-[458px]">
          {
            show ? <MdClose/> : <FaBars/> 
          }
          <div onClick={controlbar} className="hidden"> 
          {
            show ? hide : ''
          }
          </div>
         </div>
        <div className={`lg:flex items-center gap-x-[101.5px] lg:static fixed overflow-y-auto lg:overflow-visible lg:bg-transparent bg-[#4CAF4F]/70 backdrop-blur-lg  lg:backdrop-blur-none duration-500 ease-in-out lg:duration-0 lg:pb-0 py-20 lg:py-0 top-[50px] right-0 text-center h-screen lg:h-fit ${show ? 'w-1/2' : 'w-0 lg:w-full opacity-50 lg:opacity-100'}`}>
          <ul className="flex flex-col lg:flex-row items-center xl:gap-x-[50px] gap-y-[50px] gap-x-[31px] text-white md:text-[#4D4D4D]">
            <li><a className='text-base font-medium font-Inter' href="">Home</a></li>
            <li><a className='text-base font-normal font-Inter' href="">Service</a></li>
            <li><a className='text-base font-normal font-Inter' href="">Feature</a></li>
            <li><a className='text-base font-normal font-Inter' href="">Product</a></li>
            <li><a className='text-base font-normal font-Inter' href="">Testimonial</a></li>
            <li><a className='text-base font-normal font-Inter' href="">FAQ</a></li>
          </ul>
        <div className="mt-[3%] lg:mt-0 ">
          <a href="" className='py-[10px] px-[20px] text-[14px] font-Inter font-medium bg-white rounded text-[#4CAF4F] mr-[14px]'>login</a>
          <a href="" className='py-[10px] px-[20px] text-[14px] font-Inter font-medium bg-[#4CAF4F] text-white rounded'>Sign up</a>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar