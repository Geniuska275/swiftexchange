import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

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
        <h1 className="text-center font-bold text-[40px] text-[#E6E6E6] mt-5 font-[Poppins]">Empower Your financial future with<br></br> the ultimate crypto and gift cards exchange:<br></br>Join the revolution today.</h1>
         <h2 className="text-center font-bold text-3xl text-[grey] mt-3 font-[Poppins]" >We trade all types of gift cards, BTC, ETH and others and we pay in naira and rands.</h2>
         <div className="text-center mt-[20px]">
          
         <a href="https://wa.me/+2347032188798"> 
          <button className='bg-[#CD45FD] md:ml-8 rounded-md   font-[Poppins] px-6 py-2 text-white shadow-lg hover:bg-purple-500 duration-500'> Trade Here</button>
          </a>
          <a href="https://www.instagram.com/swiftexchange007?igsh=MTZrZWwzaHF0bTR4ag%3D%3D&utm_source=qr">
          <button className='bg-transparent md:ml-8 rounded-md  border border-[#CD45FD]  font-[Poppins] px-6 py-2 text-[#CD45FD] shadow-lg hover:bg-purple-500 duration-500 hover:text-white'  > Follow Us</button>
          </a>
         </div>
      </section>
      <section className="line">
        <h3><b>+1000</b> Users</h3>
        <h3><b>+15</b> Sponsors & Partners</h3>
        <h3><b>+5000</b> Daily Trades</h3>
        <h3><b>+30</b> Cryptocurrency</h3>
      </section>
      <section className="mt-5">
        <h1 className="text-center text-[#CD45FD]">WHY US</h1>
        <h1 className="text-center font-bold text-[30px] text-[#E6E6E6] mt-5 font-[Poppins]">Experience The Best in Security,<br></br> High Rates And Incredibility.</h1>
         <h2 className="text-center font-bold text-xl text-[grey] mt-3 font-[Poppins]" >Experience the best in security,high rates and unparalled reliability.<br></br>
         Your assets are safe ,your satisfaction is gauranteed.</h2>
         <div className="character">
          <div className="w-[300px] p-[10px] ">
            <img src="./s.jpeg" style={{width:"100px",textAlign:"center"}}/>
            <h1 className="text-[#E6E6E6] font-bold mt-3 text-2xl text-center mb-4">We Are Dependable</h1>
            <p className="text-center text-[grey] font-bold">count on us for reliable service and secure transactions.<br></br>
            Your dependable partner in the Cryptocurrency world.</p>
          </div>
          <div className="w-[300px] p-[10px] ">
          <img src="./r.jpeg"/>
            <h1 className="text-[#E6E6E6] font-bold mt-3 text-2xl text-center mb-4" >Reliable</h1>
            <p className="text-center text-[grey] font-bold ">trust in us for unmatched secure transactions instant payment and fast trading in consistent high returns.</p>
          </div>
          <div className="w-[300px] p-[10px] ">
          <img src="./t.jpeg"/>
            <h1 className="text-[#E6E6E6] font-bold mt-3 text-2xl text-center mb-4" >Transparent</h1>
            <p className="text-center text-[grey] font-bold">Experience complete transparency,clear,honest transactions and full visibility into your investments.</p>
          </div>
         </div>
      </section>
      <section>
        <div className="What">
          <h1 className="font-bold text-[#E6E6E6] ml-[90px] text-xl ">What We Do At <span className="text-[#CD45FD]">Swiftexchange</span></h1>
          <button className='bg-[#CD45FD] md:ml-8 rounded-md  mr-[95px] font-[Poppins] px-6 py-2 text-white shadow-lg hover:bg-purple-500 duration-500'>
             Trade with Swift Exchange
          </button>
        </div>
        <div className="seamless">
          <div>
            <div className="border border-white w-[750px]  flex justify-between items-center rounded-md h-[200px] p-5 mb-4"> 
              <div>
                <h1 className="font-bold text-xl text-[#E6E6E6] mb-3">Seamless Experience</h1>
                <p className="font-bold text-[gray]">Our platform provides a seamless experience for selling and trading a wide range of Cryptocurrencies and Gift cards.</p>
              </div>
               <img src="./seamless.jpeg"/>
 

            </div>
            <div className="border border-white w-[750px]  p-5 flex justify-between items-center rounded-md h-[200px]"> 
            <div>
                <h1 className="font-bold text-xl text-[#E6E6E6] mb-3">Security</h1>
                <p className="font-bold text-[gray]">
                  You can bid farewell to scammers & unreliable traders as we are here to provide secure and trustworthy envrionments for your transactions.
                </p>
              </div>
               <img src="./seamless.jpeg"/>
 


            </div>
          </div>
          <div className="border border-white w-[400px] h-[400px] p-5 rounded-lg">
          <img src="./seamless.jpeg"/>
           <h1 className="font-bold text-xl text-[#E6E6E6] mb-6" >Support</h1>
           <p className="font-bold text-[gray]">At Swift Exchange, we prioritize customer satisfaction and offer round clock support</p>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center mt-6">

        <div className="sub">
          <h1 className="text-center text-white text-3xl font-bold font-[Poppins]">Subscribe For Our Tips</h1>
          <p className="text-center text-white font-[Poppins] mt-4">Partnering with a secure like swift exchange,and can navigate the exciting<br></br> world of cryptocurrency with confidence by subscribing to receive our tips
          </p>
          <button className="bg-[#CD45FD] text-center text-white border border-white mt-5 shadow rounded p-[10px]">Subscribe Now</button>
        </div>
      </section>
      <footer>




        
      </footer>
    </div>
    }
    </>
  )
}

export default Homepage