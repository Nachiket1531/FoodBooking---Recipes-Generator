import React, { useState ,useEffect } from 'react'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import FoodDisplay from '../../components/food_display/FoodDisplay';




function Menu() {

    const [category , setCategory] = useState("All");

    useEffect(()=>{
      window.scroll(0,0)
  },[])
  return (
    <>
    <div className='menu_banner'>
    
    </div>
    <div className="section " id='explore_menu'>
        <div className="title">
          <h3>What's on your mind?</h3>
        </div>
        <ExploreMenu category = {category} setCategory= {setCategory}/>
      </div>
      <hr />

      <div className="section">
      <div className="title">
          <h3>Top dishes near you</h3>
          {/* <img src= {Noodle} alt="" /> */}
        </div>
        <FoodDisplay category={category}/>
      </div>
    </>
  )
}

export default Menu