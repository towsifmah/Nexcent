import {BsInstagram} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {PiTelegramLogoBold} from 'react-icons/pi'

import footerlogo from '../../assets/footerlogo.svg'


const Footer = () => {
  return (
    <div className="bg-[#263238] py-[64px] xl:px-[165px] px-2">
      <div className="container">
        <div className='flex flex-wrap'>
          <div className='xl:mr-[284px] lg:mr-[120px] mr-[50px]'>
            <img className='w-[140px] lg:w-[180px]' src={footerlogo} alt="logo" />
                <p className="lg:text-[14px] text-[10px] font-Inter font-normal text-[#F5F7FA] mt-[40px] mb-[8px]">Copyright © 2020 Nexcent ltd.</p>
            <p className="lg:text-[14px] text-[10px] font-Inter font-normal text-[#F5F7FA]">All rights reserved</p>
            <div className='flex items-center lg:gap-[16px] gap-[10px] text-white lg:mt-[40px] mt-[22px]'>
                <div className='w-[32px] h-[32px] rounded-[100px] p-[8px] bg-[#3c464c]'><BsInstagram/></div>
                <div className='w-[32px] h-[32px] rounded-[100px] p-[8px] bg-[#3c464c]'><BsDribbble/></div>
                <div className='w-[32px] h-[32px] rounded-[100px] p-[8px] bg-[#3c464c]'><BsTwitter/></div>
                <div className='w-[32px] h-[32px] rounded-[100px] p-[8px] bg-[#3c464c]'><BsYoutube/></div>
            </div>
          </div>
          <div className='xl:mr-[120px] lg:mr-[90px] mr-[60px]'>
            <h3 className='lg:text-[20px] text-[14px] font-Inter font-semibold text-white mb-[24px]'>Company</h3>
            <div>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white mb-[12px]'>About us</a>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white mb-[12px]'>Blog</a>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white mb-[12px]'>Contact</a>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white mb-[12px]'>Pricing</a>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white'>Testimonials</a>
            </div>
          </div>
          <div>
            <h3 className='lg:text-[20px] text-[14px] font-Inter font-semibold text-white mb-[24px]'>Support</h3>
            <div>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white mb-[12px]'>Help center</a>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white mb-[12px]'>Terms of service</a>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white mb-[12px]'>Legal</a>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white mb-[12px]'>Privacy policy</a>
                <a href="" className='flex flex-row lg:text-[14px] text-[9px] font-normal font-Inter text-white'>Status</a>
            </div>
          </div>
          <div className='xl:ml-[120px] lg:ml-[100px] md:ml-[80px]'>
          <h3 className='lg:text-[20px] text-[14px] font-Inter font-semibold text-white mb-[24px]'>Stay up to date</h3>
          <div className='flex items-center lg:w-[255px] w-[220px] lg:h-[44px] h-[33px] bg-[#515b60] rounded-md'>
            <input type="email" className=' text-white pl-[12px] border-none outline-none bg-transparent ' placeholder='Your email address'/>
            <a href=""className='lg:text-[20px] text-[14px] text-white font-Inter '><PiTelegramLogoBold/></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
