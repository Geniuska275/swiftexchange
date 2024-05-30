import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
// import logo from "./logo.JPG"
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen]=useState(false)
  return (
    <div className="shadow-md top-0 sticky left-0 w-full border-b border-0 "
    >
      <div className="md:flex items-center bg-black justify-between py-4 md:px-10 px-7 md:items-center  ">
        {/* <image src={logo} style={{width:"100px"}}/> */}
        <Link to="/">
        <h1 style={{color:"#E6E6E6",marginTop:"10px"}}>SWIFT EXCHANGE.</h1>
        </Link>
        { open ? 
        <div className="absolute right-8 top-6 cursor-pointer  md:hidden">
        <RxHamburgerMenu style={{fontSize:"30px",color:"#CD45FD"}} onClick={()=>setOpen(!open)} />
        </div>:
        <div className="absolute right-8 top-6 cursor-pointer md:hidden">
        <MdClose style={{fontSize:"30px",color:"#CD45FD"}} onClick={()=>setOpen(!open)} />
        </div>
        }
        <ul className={`md:flex md:items-center md:pb-0 pb-12 
        absolute 
         md:static md:z-auto z-[-1] left-0 w-full md:items-center md:w-auto md:pl-0 pl-9 transition-all ease-in ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100'} `}>
          <Link to="/Cryptocurrency">
          <li className="md:ml-8 md:my-0 my-7 font-bold text-xl  text-[#E6E6E6] font-[Poppins]">Cryptocurrency</li>
          </Link>
          <Link to="/GiftCards">
          <li className="md:ml-8 md:my-0 my-7 font-bold text-xl text-[#E6E6E6] font-[Poppins]">Gift Cards</li>
         </Link>
         <Link to="/AboutUs">
          <li className="md:ml-8 md:my-0 my-7 font-bold text-xl text-[#E6E6E6] font-[Poppins]">About Us</li>
         </Link>
         <a href="https://wa.me/+2347032188798"> 
         <button className="bg-[#CD45FD] md:ml-8 rounded-md   font-[Poppins] px-6 py-2 text-white shadow-lg hover:bg-purple-500 duration-500">How to trade</button>
         </a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar