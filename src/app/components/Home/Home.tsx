import React from 'react'
import Hero from '../Hero'
import Category from '../FeaturedProducts'
import LatestProducts from '../LatestProducts'
import LeatestBlog from '../LatestBlog'
import Offer from '../Offer'
import Unique from '../Unique'
import DiscountItem from '../Discount'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <LatestProducts/>
      <Offer/>
      <Unique/>
      <LeatestBlog/>
      <DiscountItem/>
  
    </div>
  )
}

export default Home