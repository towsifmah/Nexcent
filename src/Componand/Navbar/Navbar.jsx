import { useState } from "react"
import {MdClose} from 'react-icons/md'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
  const [show , notshow] = useState(false)
  const controlbar = () =>{
    notshow(!show)
  }
  return (
  <div className='bg-[#F5F7FA] py-[22px]'>
      <div className="container">
     <div className='flex items-center gap-x-[126.1px]'>
     <div>
            <img src="src/assets/logo.svg" alt="Logo" />
        </div>
         <div onClick={controlbar} className="lg:hidden text-[25px] font-semibold text-[#4D4D4D] border-2 border-[#4CAF4F] rounded ml-[50px] sm:ml-[328px] md:ml-[458px]">
          {
            show === true ? <MdClose/> : <FaBars/>
          }
         </div>
        <div className={`lg:flex items-center gap-x-[101.5px] lg:static absolute lg:bg-transparent bg-[#4CAF4F]/70 backdrop-blur-sm duration-500 pb-[5%] lg:pb-0 left-[0px] text-center w-full ${show ? 'top-[66px]' : 'top-[-218px] sm:top-[-254px]'}`}>
          <ul className="lg:flex items-center xl:gap-x-[50px] gap-x-[31px] text-white md:text-[#4D4D4D]">
            <li><a className='text-base font-medium font-Inter' href="">Home</a></li>
            <li><a className='text-base font-normal font-Inter' href="">Service</a></li>
            <li><a className='text-base font-normal font-Inter' href="">Feature</a></li>
            <li><a className='text-base font-normal font-Inter' href="">Product</a></li>
            <li><a className='text-base font-normal font-Inter' href="">Testimonial</a></li>
            <li><a className='text-base font-normal font-Inter' href="">FAQ</a></li>
          </ul>
        <div className="mt-[3%] lg:mt-0">
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