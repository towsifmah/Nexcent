import CommunityIcon1 from '../../assets/communityIcon1.svg'
import CommunityIcon3 from '../../assets/communityIcon3.svg'
import CommunityIcon2 from '../../assets/communityIcon2.svg'

const Community = () => {
  return (
    <div className="container">
        <div className=" text-center">
        <h3 className="max-w-[542px] m-auto text-[36px] font-semibold font-Inter text-[#4D4D4D] leading-[44px] mb-[8px]">Manage your entire community in a single system</h3>
        <p className="text-base font-Inter font-normal text-[#717171]">Who is Nextcent suitable for?</p>
        </div>.
        <div className="flex flex-wrap items-center lg:justify-between justify-center mt-[16px] mb-[94px]">
            <div className="py-[24px] px-[32px] max-w-[299px] shadow-md hover:shadow-2xl hover:rounded duration-500">
                <img className="m-auto" src={CommunityIcon1} alt="" />
                <h4 className=" text-[28px] text-center font-Inter font-bold text-[#4D4D4D] leading-[36px] mt-[16px] mb-[8px]">Membership Organisations</h4>
                    <p className=" text-[14px] text-center font-Inter font-normal text-[#717171] leading-[20px]">Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="py-[24px] px-[32px] lg:my-0 my-[15px] md:ml-[10px] lg:ml-0 sm:ml-0 max-w-[299px] shadow-md rounded hover:shadow-2xl hover:rounded duration-500">
                <img className="m-auto" src={CommunityIcon2} alt="" />
                <h4 className=" text-[28px] text-center font-Inter font-bold text-[#4D4D4D] leading-[36px] mt-[16px] mb-[8px]">National Associations</h4>
                    <p className=" text-[14px] text-center font-Inter font-normal text-[#717171] leading-[20px]">Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="py-[24px] px-[32px] max-w-[299px] shadow-md hover:shadow-2xl hover:rounded duration-500">
                <img className="m-auto" src={CommunityIcon3} alt="" />
                <h4 className=" text-[28px] text-center font-Inter font-bold text-[#4D4D4D] leading-[36px] mt-[16px] mb-[8px]">Clubs And Groups</h4>
                    <p className=" text-[14px] text-center font-Inter font-normal text-[#717171] leading-[20px]">Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
    </div>
  )
}

export default Community