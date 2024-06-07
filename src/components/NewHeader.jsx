import { FaTimes, FaBars } from "react-icons/fa";
import logo from "./real.jpeg";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import { useState, useEffect } from "react";




export default function NewHeader(){
     const [isOpen,setIsOpen]=useState(false)
     const toggle=()=>{
        setIsOpen(!isOpen)
     }
    const [activeTab, setActiveTab] = useState("home");
    const location = useLocation();
    useEffect(() => {
      if (location.pathname == "/") {
        setActiveTab("home");
      } else if (location.pathname == "/Cryptocurrency") {
        setActiveTab("Cryptocurrency");
      } else if (location.pathname=="/gift-cards") {
        setActiveTab("gift-cards");
      }
    }, [location]);
    return(
        <div className=" shadow-sm w-full sticky border-b top-0 py-3 bg-[black] z-[10] font-[poppins]"> 
        <nav className="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    {/* navbar logo */}
                <Link to="/">
                <img src={logo} style={{width:"160px",height:"80px"}} className="logo"/>
                </Link>
                {/* end */}
                {/* navbar links */}
            {/* end */}
              {/*  */}

              <div className=" hidden md:flex  justify-between items-center p-4 gap-5 mr-[40px]">
            <Link  to="/Cryptocurrency" 
             className={`${activeTab =="Cryptocurrency" ? "text-[#CD45FD]":"text-white"} no-underline font-bold`}
             
             >Cryptocurrency
            </Link>
            <Link  to="/gift-cards"
             className={`${activeTab =="gift-cards" ? "text-[#CD45FD]":"text-white"} no-underline font-bold`}    
            >Gift Cards
            </Link>
        <div className="flex justify-evenly items-center gap-3 mt-2">
        <a href="https://wa.me/+2347032188798"> 
         <button className="bg-[#CD45FD] md:ml-8 rounded-md   font-[Poppins] px-6 py-2 text-white shadow-lg hover:bg-purple-500 duration-500">How to trade</button>
         </a>
        
        </div>
        </div>
        {/*  */}

           {isOpen ?
           <div className="md:hidden">
            <FaTimes         
            onClick={toggle}
            
            className="text-[#CD45FD] text-2xl "
            />
            </div>
            :
            <div className="md:hidden border rounded bg-[#CD45FD] p-2">
            
            <FaBars
            
            onClick={toggle}
            className="text-[black] text-2xl"
            
            />
            </div>
            
        }
          

        
        </div>
        </div>
        </nav>
        {
            isOpen ?(
                <div className="md:hidden mt-5 bg-black w-full flex z-[10] justify-center items-center">
    
        <div className=" flex flex-col justify-center items-center p-4 ">
            <Link  to="/cryptocurrency" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="cryptocurrency" ? "text-[#CD45FD]":"text-white"} no-underline font-bold`}
             
             >Cryptocurrency
            </Link>
            <Link  to="/gift-cards" onClick={()=>setIsOpen(false)}
             className={`${activeTab =="giftcards" ? "text-[#CD45FD]":"text-white"} no-underline font-bold`}    
            >Gift Cards
            </Link>
            
           
      
        <div className="flex justify-evenly items-center gap-3 mt-2">
      
        <a href="https://wa.me/+2347032188798"> 
         <button className="bg-[#CD45FD] md:ml-8 rounded-md   font-[Poppins] px-6 py-2 text-white shadow-lg hover:bg-purple-500 duration-500">How to trade</button>
         </a>
        </div>

        </div>
    
                </div>
            ):null
        }
        </div>
    )
}