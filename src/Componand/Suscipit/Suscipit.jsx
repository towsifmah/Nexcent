import {HiOutlineArrowRight} from 'react-icons/hi'

const Suscipit = () => {
  return (
    <div className="bg-[#F5F7FA] py-[32px]">
        <div className="container">
            <h3 className='lg:max-w-[887px] md:max-w-[640px] max-w-[420px] m-auto text-center lg:text-[64px] text-[35px] md:text-[50px] font-semibold font-Inter lg:leading-[76px] mb-[32px]'>Pellentesque suscipit fringilla libero eu.</h3>
            <div className='flex justify-center text-white lg:text-base text-[13px] font-Inter font-medium'>
                <a href="" className='lg:py-[14px] py-[10px] lg:px-[32px] px-[20px] bg-[#4CAF4F] flex items-center rounded hover:bg-transparent hover:border hover:border-[#4CAF4F] hover:text-[#4D4D4D] duration-300'>Get a Demo<span className='pl-[8px]'><HiOutlineArrowRight/></span></a>          
            </div>
        </div>
    </div>
  )
}

export default Suscipit