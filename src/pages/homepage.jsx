import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function Homepage() {
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },6000)
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
          <button className='bg-[#CD45FD] md:ml-8 rounded-md   font-[Poppins] px-6 py-2 text-white shadow-lg hover:bg-purple-500 duration-500'> Trade Here</button>
          <button className='bg-transparent md:ml-8 rounded-md  border border-[#CD45FD]  font-[Poppins] px-6 py-2 text-[#CD45FD] shadow-lg hover:bg-purple-500 duration-500 hover:text-white'  > Follow Us</button>
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
            <h1 className="text-[#E6E6E6] font-bold mt-3">We Are Dependable</h1>
            <p>count on us for reliable service and secure transactions.<br></br>
            Your dependable partner in the Cryptocurrency world.</p>

          </div>
          <div>
          <img src="./r.jpeg"/>
            <h1>Reliable</h1>
            <p>trust in us for unmatched secure transactions</p>

          </div>
          <div>
          <img src="./t.jpeg"/>
            <h1>Transparent</h1>


          </div>




         </div>

      </section>


    </div>
    }
    </>
  )
}

export default Homepage