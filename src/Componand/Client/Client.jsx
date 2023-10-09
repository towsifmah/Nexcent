import ourClient1 from '../../assets/ourClient1.svg'
import ourClient2 from '../../assets/ourClient2.svg'
import ourClient3 from '../../assets/ourClient3.svg'
import ourClient4 from '../../assets/ourClient4.svg'
import ourClient5 from '../../assets/ourClient5.svg'
import ourClient6 from '../../assets/ourClient6.svg'
import ourClient7 from '../../assets/ourClient7.svg'

const Client = () => {
  return (
    <div className="container">
        <div className="text-center justify-center">
            <h2 className="text-[36px] font-Inter font-semibold text-[#4D4D4D] pt-[40px] mb-[8px]">Our Clients</h2>
            <p className="text-base font-Inter font-normal text-[#717171]">We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="flex flex-wrap items-center gap-[135px] justify-center mt-[50.85px] mb-[74.15px]">
            <img src={ourClient1} alt="logo" />
            <img src={ourClient2} alt="logo" />
            <img src={ourClient3} alt="logo" />
            <img src={ourClient4} alt="logo" />
            <img src={ourClient5} alt="logo" />
            <img src={ourClient6} alt="logo" />
            <img src={ourClient7} alt="logo" />
        </div>
    </div>
  )
}

export default Client