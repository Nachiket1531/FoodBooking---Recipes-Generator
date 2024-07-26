import React from 'react';
import "../exploreMenu/explore_menu.css";
import { menu_list } from '../../assets/assets';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ExploreMenu({category , setCategory}) {


  return (
    <>
    <div className='explore_menu' >
     
        {menu_list.map((menu, index) => (
          <div className="menu_list" key={index}>
            <Link to={menu.menu_link}>
              <div className='menu_img' onClick={()=> setCategory(prev => prev === menu.menu_name? "All" : menu.menu_name)}>
                <img 
                src={menu.menu_image} 
                alt={menu.menu_name} 
               
                />
              </div>
              <div className='menu_title'>
              <h3  className={category === menu.menu_name? "active" : ""}>{menu.menu_name}</h3>
              </div>
            </Link>
          </div>

        ))}
      
    </div>
    
    </>
  );
}

export default ExploreMenu;
