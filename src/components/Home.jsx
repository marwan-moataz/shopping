import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <img src='https://www.usmagazine.com/wp-content/uploads/2022/09/City-Girl-Fashion-Stock-Photo.jpg?crop=0px%2C49px%2C2000px%2C1131px&resize=1600%2C900&quality=86&strip=all' alt='home-img'></img>
        <div className='shop-now'>
        <h1>Summer Collection has an Offer</h1>
        <a href='/store'><button className='shopp'>SHOP NOW</button></a>
        </div>
    </div>
  )
}

export default Home