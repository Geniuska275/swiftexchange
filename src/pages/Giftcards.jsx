
import { useState,useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
function Giftcards() {
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
    
    
    <div className="text-white">Giftcards</div>
    }
    </>
  )
}

export default Giftcards