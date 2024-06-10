
import { useState,useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { MdOutlineCopyright } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
function Giftcards() {

  const giftcards=[

    {name:"Ebay",
    image:"data:image/png;base64,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" 
    },
    {name:"Apple",
    image:" https://thumbs.dreamstime.com/b/apple-logo-white-background-montreal-canada-july-98221057.jpg?w=768" 
    },
    {name:"Steam",
    image:"data:image/jpeg;base64,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" 
    },
    {name:"Sephora",
    image:"data:image/png;base64,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" 
    },
    {name:"Ethereum",
    image:"data:image/jpeg;base64,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" 
    },
    {name:"Amazon",
    image:"data:image/png;base64,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" 
    },
  ]

    const [loading,setLoading]=useState(false);

    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },6000)
    },[])
    const facebook=import.meta.env.VITE_FACEBOOK;
  return (
    <>
    {loading ?  <div className="loader">
               <HashLoader
               color={"purple"}
               size={130}
              loading={loading}/>
             </div>:
    
    
    <div className="text-white crypto">
      {giftcards.map((item)=>(
        <div key={item}>
        <img  src={item.image} style={{width:"200px",height:"200px",border:"4px solid #CD45FD",borderRadius:"10px"}}/>
        <h1 style={{textAlign:"center",fontSize:"20px",marginTop:"10px",color:"#CD45FD"}}>{item.name}</h1>
        </div>
      ))}

     
    </div>
    }
              <footer className="border-t border-white">
        <div>
          <h3 className="w-[100px]">Company</h3>
           <ul>
            <li>Trade</li>
            <li>About Us</li>
            <li>Faq</li>
            <li>Reviews</li>
            <li>Rates</li>
           </ul>
        </div>
        <div>
          <h3 className="w-[100px]">Gift Cards</h3>
          <ul>
            <li>Ebay</li>
            <li>Stream</li>
            <li>Sephora</li>
            <li>Razor Gold</li>
            <li>Amazon</li>
           </ul>
        </div>
        <div >
          <h3 className="w-[100px]">Cryptos</h3>
          <ul>
            <li>BitCoin</li>
            <li>USDT</li>
            <li>Etherum</li>
            <li>Atom </li>
            <li>Ripple</li>
           </ul>
        </div>
        <div >
          <h3 className="w-[100px]">Cryto Market</h3>
          <ul>
            <li>Price Chart</li>
            <li>Market Analysis</li>
            <li>Latest News</li>
            <li>Trading Platform</li>
           </ul>
        </div>
        <div className=" itemss">
          <h3 className="mb-3 text-[#CD45FD] font-[Poppins] w-[150px]">SOCIAL MEDIA.</h3>
          <div className="flex gap-6 mr-[80px]">
            <a href={facebook} className="hover:text-red-100">

            <FaFacebook color="white" />
            </a>
            <a href={import.meta.env.VITE_INSTA}>

        <FaSquareInstagram color="white" />
            </a>
<a href={import.meta.env.VITE_LINKEDIN}>

        <FaLinkedin  color="white"/>
            </a>
            <a href={import.meta.env.VITE_TWITTER}>

           <RiTwitterXFill color="white" />
            </a>

        </div>
          
        </div>
        
      </footer>
      <div className="last">
        <div className="flex gap-2 items-center">
          
         <MdOutlineCopyright />
          <small style={{fontSize:"10px",color:"white"}}>Copyright 2024 Swift Exchange</small>

        </div>
        <small style={{fontSize:"10px",color:"white"}}>Terms & Conditions</small>



      </div>
    
    </>
  )
}

export default Giftcards