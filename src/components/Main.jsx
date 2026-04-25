import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import HomeItems from '../components/HomeItems'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
// import { ChatBot } from './ChatBot'
import ChatBot from './../pages/bot/ChatBot'
import SeasonalDiscountNews from './SeasonalDiscountNews'
import FacebookNewsFeed from '../components/FacebookNewsFeed';
import PromotionPhoto from './PromotionPhoto';
import Review from './Review';
import NewItems from './NewItems'
import HotItems from './HotItems'

const Main = () => {
    
  return (
    <>
    
    <div>
        {/* <Announcement/> */}
        <Slider/>
        {/* <ChatBot /> */}
        <Categories/>
        
        {/* <PromotionPhoto/> */}
        <HomeItems title="Promotion Items" url="promotionitem_api"/>
        {/* <NewItems title="New Items" url="newitem_api"/> */}
       
        <NewItems title="New Arrival" url="newitem_api"/>
        {/* <HomeItems title="Promotion Items" url="promotionitem_api"/> */}
        <HotItems title="Hot Sale Items" url="hotsaleitem_api"/>
        {/* <SeasonalDiscountNews/> */}
        <Review/>
        <FacebookNewsFeed />
      
        
      </div>
      <ChatBot />
      </>
  )
}

export default Main