import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

function ExploreMenu({category,setcategory}) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>
                Dive into our curated selection of dishes that cater to all tastes and preferences. From local favorites to international delights, our menu offers a variety of options to satisfy your cravings. Whether you're in the mood for something spicy, savory, or sweet, we've got you covered!
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div onClick={() => setcategory(prev => prev===item.menu_name ? "All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img  className = {category===item.menu_name ? "active" :""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr/>
        </div>
    );
}

export default ExploreMenu;
