import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import "./App.css";

const allCategories = items.map((item) => item.category);
const uniqueCategories = ['all' , ...new Set(allCategories)];


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(uniqueCategories);

  const filterCategories = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }


  return (
    <>
      <h2 className='heading'>Our Menu</h2>
      <Categories items={categories} filterFunction={filterCategories}></Categories>
      <Menu
        items={menuItems}
      ></Menu>
    </>
  );
}

export default App;
