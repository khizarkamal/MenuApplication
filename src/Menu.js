import React from 'react';
import "./Menu.css";

const Menu = ({ items }) => {
  // const { id, title, price, img, desc} = items;
  return (
    <section className='items-container'>
      { items.map((item)=>{
        return (
          <div key={item.id} className='item'>
            <div className='item-image-container'>
              <img src={item.img} alt={item.title} ></img>
            </div>
            <div className='details'>
              <div className='price-title'>
                <h4>{item.title}</h4>
                <span className='item-price'>${item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
};

export default Menu;
