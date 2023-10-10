import {HiArrowRight} from 'react-icons/hi'

import marketingimage1 from '../../assets/marketingimage1.svg'
import marketingimage2 from '../../assets/marketingimage2.svg'
import marketingimage3 from '../../assets/marketingimage3.svg'

const Marketing = () => {
  return (
    <div className="container">
        <div className="text-center mt-[48px] mb-[16px]">
            <h2 className="lg:text-[36px] text-[25px] font-semibold font-Inter text-[#4D4D4D] mb-[8px]">Caring is the new marketing</h2>
            <p className='lg:max-w-[628px] max-w-[500px] m-auto lg:text-base text-[12px] font-normal font-Inter text-[#4D4D4D] lg:leading-[24px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​​</p>
        </div>
        <div className='mb-[94px]'>
            <div className='lg:grid lg:grid-cols-3 lg:gap-x-[10px] xl:gap-x-0 '>
              <div className='flex flex-col items-center'>
             <picture> <img src={marketingimage1} alt="" /></picture>
                <div className="bg-[#F5F7FA] rounded lg:p-[16px] p-[25px] max-w-[317px] text-center translate-y-[-70px] shadow-lg ">
                    <h3 className='lg:text-[20px] text-[14px] font-Inter font-semibold leading-[28px] text-[#717171] mb-[24px]'>Creating Streamlined Safeguarding Processes with OneRen</h3>
                    <div className='flex items-center justify-center lg:text-[20px] text-[13px] font-Inter font-semibold text-[#4CAF4F] gap-[8px]'>
                    <a href="">Readmore</a>
                    <HiArrowRight/>
                    </div>
                </div>
                </div>
              <div className='flex flex-col items-center'>
             <picture> <img src={marketingimage2} alt="" /></picture>
                <div className="bg-[#F5F7FA] rounded lg:p-[16px] p-[25px] max-w-[317px] text-center translate-y-[-70px] shadow-lg ">
                    <h3 className='lg:text-[20px] text-[14px] font-Inter font-semibold leading-[28px] text-[#717171] mb-[24px]'>What are your safeguarding responsibilities and how can you manage them?</h3>
                    <div className='flex items-center justify-center lg:text-[20px] text-[13px] font-Inter font-semibold text-[#4CAF4F] gap-[8px]'>
                    <a href="">Readmore</a>
                    <HiArrowRight/>
                    </div>
                </div>
                </div>
              <div className='flex flex-col items-center'>
             <picture> <img src={marketingimage3} alt="" /></picture>
                <div className="bg-[#F5F7FA] rounded lg:p-[16px] p-[25px] max-w-[317px] text-center translate-y-[-70px] shadow-lg ">
                    <h3 className='lg:text-[20px] text-[14px] font-Inter font-semibold leading-[28px] text-[#717171] mb-[24px]'>Revamping the Membership Model with Triathlon Australia</h3>
                    <div className='flex items-center justify-center lg:text-[20px] text-[13px] font-Inter font-semibold text-[#4CAF4F] gap-[8px]'>
                    <a href="">Readmore</a>
                    <HiArrowRight/>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Marketing