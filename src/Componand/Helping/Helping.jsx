import {mamber} from '../../assets/mamber.svg'
import {clubs} from '../../assets/clubs.png'
import {event} from '../../assets/event.svg'
import {payment} from '../../assets/payment.svg'

const Helping = () => {
  return (
    <div className="bg-[#F5F7FA] lg:py-[64px] py-[45px] lg:px-[144px] px-[120px]">
     <div className="container">
        <div className="lg:flex items-center justify-between">
            <div className="mb-[30px] lg:mb-0">
                <h5 className="lg:text-[36px] md:text-[28px] sm:text-[25px] text-[16px] font-semibold font-Inter text-[#4D4D4D]">Helping a local </h5>
                <h4 className="lg:text-[36px] md:text-[28px] sm:text-[25px] text-[16px] font-semibold font-Inter text-[#4CAF4F]">business reinvent itself</h4>
                <p className="lg:text-base md:text-[10px] sm:text-[8px] text-[6px] font-normal font-Inter text-[#18191F]">We reached here with our hard work and dedication</p>
            </div>
           <div>
           <div className="flex gap-x-[30px] mb-[40px]">
                <div className="flex items-center gap-x-[16px]">
                    <img className="md:w-0 w-[30px]" src={mamber} alt="" />
                    <div>
                        <h3 className="lg:text-[28px] md:text-[18px] text-[15px] font-bold font-Inter text-[#4D4D4D]">2,245,341</h3>
                        <p className="lg:text-base md:text-[12px] text-[9px] font-Inter font-normal text-[#717171]">Members</p>
                    </div>
                </div>
                <div className="flex items-center gap-[16px]">
                    <img className="md:w-0 w-[30px]" src={clubs} alt="" />
                    <div>
                        <h3 className="lg:text-[28px] md:text-[18px] text-[15px] font-bold font-Inter text-[#4D4D4D]">46,328</h3>
                        <p className="lg:text-base md:text-[12px] text-[9px] font-Inter font-normal text-[#717171]">Clubs</p>
                    </div>
                </div>
            </div>
           <div className="flex gap-x-[50px]">
                <div className="flex items-center gap-x-[16px]">
                    <img className="md:w-0 w-[30px]" src={event} alt="" />
                    <div>
                        <h3 className="lg:text-[28px] md:text-[18px] text-[15px] font-bold font-Inter text-[#4D4D4D]">828,867</h3>
                        <p className="lg:text-base md:text-[12px] text-[7px] font-Inter font-normal text-[#717171]">Event Bookings</p>
                    </div>
                </div>
                <div className="flex items-center gap-[16px]">
                    <img className="md:w-0 w-[30px]" src={payment} alt="" />
                    <div>
                        <h3 className="lg:text-[28px] md:text-[18px] text-[15px] font-bold font-Inter text-[#4D4D4D]">1,926,436</h3>
                        <p className="lg:text-base md:text-[12px] text-[9px] font-Inter font-normal text-[#717171]">Payments</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
     </div>
    </div>
  )
}

export default Helping