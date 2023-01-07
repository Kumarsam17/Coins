import axios from 'axios'
import React,{useEffect, useState} from 'react';
import Coins from "./Products"
import Loader from './Loader';


const Home = () => {
    const [coins,setCoins]=useState([]);
    const [loading,setLoading] =useState(true)
  useEffect(()=>{
    const fetchAllcoins =async()=>{
    try {
      
        const {data} =await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=520");
        console.log(data)
        setCoins(data)
        setLoading(false)
      
    } catch (error) {
      alert("not working")
    }
  }
fetchAllcoins();
},[]);
  
  return (
    <>
    <div className='home'>
      {
        loading ?<Loader /> :coins.map((i)=>(
          <Coins name={i.name} symbols={i.id} imgSrc={i.image} price={i.current_price
          } key={i.id} />)
        )
      }
    </div>
    </>
  )
}

export default Home;