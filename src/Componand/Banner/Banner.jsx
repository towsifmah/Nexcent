

const Banner = () => {
  return (
   <div className="bg-[#F5F7FA]">
     <div className="container">
      <div className="lg:flex items-center lg:gap-[104px] ml-[15px] lg:ml-0">
      <div className="lg:pt-[161.5px] pt-[130px] pb-[80px] lg:pb-[173px]">
            <h1 className="md:max-w-[657px] sm:max-w-[500px] max-w-[350px] md:text-[64px] sm:text-[40px] text-[30px] font-Inter font-semibold text-[#4D4D4D] md:leading-[76px]">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span></h1>
            <p className=" md:text-base sm:text-[12px] text-[10px] font-Inter font-normal text-[#717171] md:mt-[16px] md:mb-[32px] mb-[15px]">Where to grow your business as a photographer: site or social media?</p>
            <a href="" className="md:py-[14px] sm:py-[10px] py-[8px] md:px-[32px] sm:px-[22px] px-[16px] bg-[#4CAF4F] text-white md:text-base text-[10px] font-Inter font-medium rounded hover:border-[#4CAF4F] hover:border-2 hover:rounded hover:bg-transparent hover:text-[#4D4D4D] duration-200">Register</a>
        </div>
        <div className="lg:pt-[96px] lg:pb-[100px] pb-[70px] flex justify-center">
        <img src="src/assets/banner.svg" alt="banner" />
        </div>
      </div>
     <div className="flex justify-center gap-[8px] pb-[30px]">
     <div className="w-[15px] h-[15px] rounded-[100px] bg-[#4CAF4F]"></div>
      <div className="w-[15px] h-[15px] rounded-[100px] bg-[#4caf4f94]"></div>
      <div className="w-[15px] h-[15px] rounded-[100px] bg-[#4caf4f94]"></div>
     </div>
    </div>
   </div>
  )
}

export default Banner