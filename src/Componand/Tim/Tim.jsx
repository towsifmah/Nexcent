import {GoArrowRight} from 'react-icons/go'

import {timIcon1} from '../../assets/timIcon1.svg'
import {timIcon2} from '../../assets/timIcon2.svg'
import {timIcon3} from '../../assets/timIcon3.svg'
import {timIcon4} from '../../assets/timIcon4.svg'
import {timIcon5} from '../../assets/timIcon5.svg'
import {timIcon6} from '../../assets/timIcon6.svg'


const Tim = () => {
  return (
    <div className="bg-[#F5F7FA] py-[32px] lg:px-[144px] px-[20px]">
        <div className="container">
          <div className="lg:flex gap-[78px]">
          <div className='lg:flex justify-center'>
                <img src="src/assets/timImage.svg" alt="image" />
            </div>
            <div className="xl:max-w-[748px] w-full">
                <p className="lg:text-base text-[12px] font-Inter font-medium text-[#717171] lg:leading-[24px]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h5 className="lg:text-[20px] text-[14px] font-semibold font-Inter text-[#4CAF4F] mt-[16px] mb-[8px]">Tim Smith</h5>
                <p className="lg:text-base text-[12px] font-normal font-Inter text-[#89939E]">British Dragon Boat Racing Association</p>
                <div className='flex flex-wrap items-center gap-[41px] mt-[32px]'>
                    <img src={timIcon1} alt="" />
                    <img src={timIcon2} alt="" />
                    <img src={timIcon3} alt="" />
                    <img src={timIcon4} alt="" />
                    <img src={timIcon5} alt="" />
                    <img src={timIcon6} alt="" />
                    <div className='flex items-center lg:text-[18px] text-[13px] font-Inter font-semibold text-[#4CAF4F] lg:leading-[28px] gap-x-[8px]'>
                    <h3>Meet all customers</h3>
                    <GoArrowRight/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tim