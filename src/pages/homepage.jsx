import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";
import ActiveSlider from "../components/ActiveSlider";




function Homepage() {
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },2000)
    },[])
  return (
    <>
    {loading ?  <div className="loader">
               <HashLoader
               color={"purple"}
               size={130}
              loading={loading}/>
             </div>:
    
    
    <div className="text-white">
      <section className="banner">
        <h1 className="text-center font-bold text-[20px] text-[#E6E6E6] mt-[100px] font-[Poppins]">Empower Your financial future with<br></br> the ultimate crypto and gift cards exchange:<br></br>Join the revolution today.</h1>
         <h2 className="text-center font-bold text-xl text-[grey] mt-3 font-[Poppins]" >We trade all types of gift cards, BTC, ETH and others and we pay in naira and rands.</h2>
         <div className=" btn text-center mt-[20px]">
          
         <a href="https://wa.me/+2347032188798"> 
          <button className=' mb-4 bg-[#CD45FD] md:ml-8 rounded-md   font-[Poppins] px-6 py-2 text-white shadow-lg hover:bg-purple-500 duration-500'> Trade Here</button>
          </a>
          <a href="https://www.instagram.com/swiftexchange007?igsh=MTZrZWwzaHF0bTR4ag%3D%3D&utm_source=qr">
          <button className='bg-transparent md:ml-8 rounded-md  border border-[#CD45FD]  font-[Poppins] px-6 py-2 text-[#CD45FD] shadow-lg hover:bg-purple-500 duration-500 hover:text-white'  > Follow Us</button>
          </a>
         </div>
      </section>
      <section className="line">
        <h5><b>+1000</b> Users</h5>
        <h5><b>+15</b> Sponsors & Partners</h5>
        <h5><b>+5000</b> Daily Trades</h5>
        <h5><b>+30</b> Cryptocurrency</h5>
      </section>
      <ActiveSlider/>
      <section className="mt-5">
        <h1 className="text-center text-[#CD45FD]">WHY US</h1>
        <h1 className="text-center font-bold text-[30px] text-[#E6E6E6] mt-5 font-[Poppins]">Experience The Best in Security,<br></br> High Rates And Incredibility.</h1>
         <h2 className="text-center font-bold text-xl text-[grey] mt-3 font-[Poppins]" >Experience the best in security,high rates and unparalled reliability.<br></br>
         Your assets are safe ,your satisfaction is gauranteed.</h2>
         <div className="character">
          <div className="w-[300px] p-[10px] ">
          <div style={{
                margin:"auto",
                border:"2px solid #CD45FD",
                padding:"10px",
                borderRadius:"5px",
                width:"50px",
                height:"50px",
                justifyContent:"center",
                alignItems:"center",
                display:"flex"
               }}>
               <BsBoundingBoxCircles style={{fontSize:"25px",color:"#CD45FD"}} />
               </div>
            <h1 className="text-[#E6E6E6] font-bold mt-3 text-2xl text-center mb-4">We Are Dependable</h1>
            <p className="text-center text-[grey] font-bold">count on us for reliable service and secure transactions.<br></br>
            Your dependable partner in the Cryptocurrency world.</p>
          </div>
          <div className="w-[300px] p-[10px] ">
          <div style={{
                margin:"auto",
                border:"2px solid #CD45FD",
                padding:"10px",
                borderRadius:"5px",
                width:"50px",
                height:"50px",
                justifyContent:"center",
                alignItems:"center",
                display:"flex"
               }}>
               <BsCreditCardFill style={{fontSize:"25px",color:"#CD45FD"}} />
               </div>
            <h1 className="text-[#E6E6E6] font-bold mt-3 text-2xl text-center mb-4" >Reliable</h1>
            <p className="text-center text-[grey] font-bold ">trust in us for unmatched secure transactions instant payment and fast trading in consistent high returns.</p>
          </div>
          <div className="w-[300px] p-[10px] ">
          <div style={{
                margin:"auto",
                border:"2px solid #CD45FD",
                padding:"10px",
                borderRadius:"5px",
                width:"50px",
                height:"50px",
                justifyContent:"center",
                alignItems:"center",
                display:"flex"
               }}>
               <BsCoin style={{fontSize:"25px",color:"#CD45FD"}} />
               </div>
            <h1 className="text-[#E6E6E6] font-bold mt-3 text-2xl text-center mb-4" >Transparent</h1>
            <p className="text-center text-[grey] font-bold">Experience complete transparency,clear,honest transactions and full visibility into your investments.</p>
          </div>
         </div>
      </section>

      <section>
        <div className="What">
          <h1 className="font-bold text-[#E6E6E6] ml-[90px] text-xl  what">What We Do At <span className="text-[#CD45FD]">Swiftexchange</span></h1>
          <a href="https://wa.me/+2347032188798"> 
          <button className='do bg-[#CD45FD] md:ml-8 rounded-md  mr-[115px] font-[Poppins] px-6 py-2 text-white shadow-lg hover:bg-purple-500 duration-500'>
             Trade with Swift Exchange
          </button>
          </a>
        </div>
        <div className="seamless">
          <div>

            <div className=" experience border border-[#CD45FD] w-[600px] mb-4  flex justify-between items-center rounded-lg h-[150px] p-5 mb-4"> 
              <div>
                <h1 className=" less font-bold text-xl text-[#E6E6E6] mb-3">Seamless Experience</h1>
                <p className=" lesser font-bold text-[gray]">Our platform provides a seamless experience for selling and trading a wide range of Cryptocurrencies and Gift cards.</p>
              </div>
       

            </div>
            <div className=" experience border border-[#CD45FD] w-[600px] mb-4  flex justify-between items-center rounded-lg h-[150px] p-5 mb-4"> 
              <div>
                <h1 className=" less font-bold text-xl text-[#E6E6E6] mb-3">Support</h1>
                <p className=" lesser font-bold text-[gray]">
                At Swift Exchange, we prioritize customer satisfaction and offer round clock support
                </p>
                
              </div>
       

            </div>





            <div className=" experience border border-[#CD45FD] w-[600px] mb-4  flex justify-between items-center rounded-lg h-[150px] p-5 mb-4"> 
            <div>
                <h1 className=" less font-bold text-xl text-[#E6E6E6] mb-3">Security</h1>
                <p className=" less font-bold text-[gray]">
                  You can bid farewell to scammers & unreliable traders as we are here to provide secure and trustworthy envrionments for your transactions.
                </p>
              </div>
              
               {/* <BsCoin style={{fontSize:"30px",color:"#CD45FD"}} /> */}
            </div>
          </div>

         
        </div>
      </section>


      
      <section className="">

        <div className="sub">
          <h1 className="text-center text-white text-3xl font-bold font-[Poppins]">Subscribe For Our Tips</h1>
          <p className="text-center text-white font-[Poppins] mt-4">Partnering with a secure like swift exchange,and can navigate the exciting<br></br> world of cryptocurrency with confidence by subscribing to receive our tips
          </p>
          <div className="text-center mt-4">
          <a href="https://www.instagram.com/swiftexchange007?igsh=MTZrZWwzaHF0bTR4ag%3D%3D&utm_source=qr">
          <button className="bg-[#CD45FD]  text-center text-white border border-white mt-5 shadow rounded p-[10px]" style={{margin:"auto"}}>Subscribe Now</button>
          </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="item">
          <h3>Company</h3>
           <ul>
            <li>Trade</li>
            <li>About Us</li>
            <li>Faq</li>
            <li>Reviews</li>
            <li>Rates</li>
           </ul>
        </div>
        <div className="item">
          <h3>Gift Cards</h3>
          <ul>
            <li>Ebay</li>
            <li>Stream</li>
            <li>Sephora</li>
            <li>Razor Gold</li>
            <li>Amazon</li>
           </ul>
        </div>
        <div className="item">
          <h3>Cryptos</h3>
          <ul>
            <li>BitCoin</li>
            <li>USDT</li>
            <li>Etherum</li>
            <li>Atom </li>
            <li>Ripple</li>
           </ul>
        </div>
        <div className="item">
          <h3>Cryto Market</h3>
          <ul>
            <li>Price Chart</li>
            <li>Market Analysis</li>
            <li>Latest News</li>
            <li>Trading Platform</li>
           </ul>
        </div>
        <div className="mb-[100px] itemss">
          <h3 className="mb-3 text-[#CD45FD] font-[Poppins]">Social Media</h3>
          <div className="flex gap-6 mr-[80px]">
        <FaFacebook color="white" />
        <FaSquareInstagram />
        <FaLinkedin />
           <RiTwitterXFill />

        </div>
          
        </div>




        
      </footer>
      <div className="last">
        <div className="flex gap-2 items-center">
          
        <MdOutlineCopyright />
          <small>Copyright 2024 Swift Exchange</small>

        </div>
        <small>Terms & Conditions</small>



      </div>
    </div>
    }
    </>
  )
}

export default Homepage