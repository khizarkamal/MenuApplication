import React from 'react';
import "./Categories.css";

const Categories = (props) => {
  const { filterFunction, items } = props;

  return (
    <div className='btn-container'>
      {items.map((item, index) => {
        return (

          <button className='cat-button' key={index} onClick={() => filterFunction(item)}>
            {item}
          </button>
        )
      })
      }
    </div>
  )
}
export default Categories;
