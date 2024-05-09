import {
    IoCall,
    IoMail,
    IoArrowForwardOutline
  } from "react-icons/io5";
  import { RxDividerVertical } from "react-icons/rx";


export default function TopHeader(){
    return (
        <>
            <div className="TopHeader h-14 w-[100%] bg-slate-800 hidden lg:flex items-center overflow-hidden justify-between">
          <div className="TopLeft  text-slate-100 flex items-center">
            <div className="Contact h-8 flex items-center text-lg">
              <IoCall className="ml-5 mr-2 text-blue-500 text-[24px]" />
              Call: +91 63703 02039
            </div>
            <span className="ml-4 h-8  flex items-center text-xl">
              <RxDividerVertical className="text-[28px] text-gray-500" />
            </span>
            <div className="Email h-8 flex items-center text-lg ml-4">
              {" "}
              <IoMail className=" mr-2 text-blue-500 text-[24px]" /> Email:
              info@edublink.co{" "}
            </div>
          </div>
          <div className="TopRight text-slate-100 flex items-center justify-end text-xl">
            <a href="" className="LoginBtn">
              Login/Register
            </a>
            <a
              href=""
              className="ApplyBtn flex items-center ml-5 bg-blue-500 py-4 px-6"
            >
              Apply Now <IoArrowForwardOutline className="ml-2" />
            </a>
          </div>
        </div>
        </>
    )
} 