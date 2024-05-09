import "./Header.css";
import {
  IoArrowForwardOutline,
  IoSearch,
  IoCart,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  let [navBtn, setNavBtn] = useState(false);

  const handleNavBtn = () => {
    setNavBtn(!navBtn);
    console.log(navBtn);
  };

  return (
    <>
      <header>
        {/* Main Navbar */}

        <nav className="hidden h-20 relative bg-slate-300 lg:flex items-center justify-between w-[100%]">
          <div className="Logo h-18 w-[200px] mt-2 overflow-hidden">
            <img
              src="https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png"
              alt=""
              className="h-[100%] w-[100%]"
            />
          </div>
          <div className="MenuAndMenuBtns md:flex items-center">
            <div className="Menu ">
              <ul className="hidden lg:flex items-center gap-10 text-[1.25rem] mr-5">
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Services
                    <IoMdArrowDropdown className="mt-1" />
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Courses
                    <IoMdArrowDropdown className="mt-1" />
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Blog
                    <IoMdArrowDropdown className="mt-1" />
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <span className="ml-4 hidden lg:flex items-center text-[50px] mr-3">
              <RxDividerVertical className="text-gray-600" />
            </span>
            <div className="MenuBtns w-[4rem] flex justify-between mr-12">
              <a href="" className="flex items-center text-[32px]">
                <IoSearch />
              </a>
              <a href="" className="flex items-center text-[32px] relative">
                <IoCart />
                <div className="CartNum text-[15px] absolute top-0">0</div>
              </a>
            </div>
          </div>
          
        </nav>

        {/* Responsive Navbar */}

        <nav className="lg:hidden h-20 relative bg-slate-300 flex items-center justify-between w-[100%]">
          <div className="Logo h-18 w-[200px] mt-2 overflow-hidden">
            <img
              src="https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png"
              alt=""
              className="h-[100%] w-[100%]"
            />
          </div>
         
           <div className="MenuAndMenuBtns md:flex items-center">
            <div className={`Menu absolute z-10 top-[80px] pl-5 pb-10 w-full bg-slate-200 ${navBtn ? 'block left-0' : ' left-[-100%] z-[-1]'} `}>
              <ul className="block lg:hidden items-center gap-10 text-[1.25rem] mr-5">
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Services
                    <IoMdArrowDropdown className="mt-1" />
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Courses
                    <IoMdArrowDropdown className="mt-1" />
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Blog
                    <IoMdArrowDropdown className="mt-1" />
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-1 py-[1.5rem]">
                    Contact
                  </a>
                </li>
                <li className="pt-5 border-t-2">
                <a href="" className="LoginBtn">
                  Login/Register
                </a>
              </li>
              <li className="w-[fitcontent] inline-block mt-5">
                <a
                  href=""
                  className="ApplyBtn flex items-center bg-blue-500 py-4 px-6"
                >
                  Apply Now <IoArrowForwardOutline className="ml-2" />
                </a>
              </li>
              </ul> 
            </div>
            <span className="ml-4 hidden lg:flex items-center text-[50px] mr-3">
              <RxDividerVertical className="text-gray-600" />
            </span>
            <div className="MenuBtns w-[4rem] flex justify-between mr-12">
              <a href="" className="flex items-center text-[32px]">
                <IoSearch />
              </a>
              <a href="" className="flex items-center text-[32px] relative">
                <IoCart />
                <div className="CartNum text-[15px] absolute top-0">0</div>
              </a>
            </div>
          </div>
          <button
            onClick={handleNavBtn}
            className="btn text-[34px] lg:hidden ml-2 absolute z-100 right-[6px] "
          >
            {navBtn ? <IoClose id="Close" /> : <IoMenu id="Open" />}
          </button>
        </nav>
      </header>
    </>
  );
}
