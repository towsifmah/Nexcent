import {unseen} from '../../assets/unseen.svg'

const Unseen = () => {
  return (
    <div className="container">
        <div className="lg:flex gap-x-[49.47px] items-center">
        <div className="lg:pb-[100.01px] pb-[75px] flex justify-center">
            <img src={unseen} alt="" />
        </div>
        <div className="lg:pb-[130.5px] pb-[80px] ml-[15px] lg:ml-0">
            <h3 className="md:text-[36px] text-[30px] font-Inter font-semibold md:leading-[44px] text-[#4D4D4D] md:max-w-[601px] max-w-[460px]">The unseen of spending three years at Pixelgrade</h3>
            <p className="md:text-[14px] text-[10px] font-Inter font-normal md:leading-[20px] text-[#717171] md:max-w-[601px] max-w-[440px] md:mt-[16px] md:mb-[32px] mb-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <a href="" className="md:py-[14px] py-[9px] md:px-[32px] px-[20px] bg-[#4CAF4F] font-Inter md:text-base text-[10px] font-medium text-white rounded hover:bg-transparent hover:border-[#4CAF4F] hover:border-2 hover:text-[#717171] duration-300">Learn More</a>
        </div>
        </div>
    </div>
  )
}

export default Unseen