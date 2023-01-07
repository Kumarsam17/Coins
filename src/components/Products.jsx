import React from 'react'

const Coins = ({name,symbols,imgSrc,price}) => {
  return (
    <div className='coins'>
      <img src={imgSrc}  alt={name}/>
      <h1>{name}</h1>
    <p>{symbols}</p>
    <p>₹{price}</p>
    </div>
  )
}

export default Coins;