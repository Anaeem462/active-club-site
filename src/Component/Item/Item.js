import React from 'react';
import './Item.css'
const Item = ({item,handle}) => {
    const { img, name, seconds } = item
    
    return (
        <div className='card'>
            <img className='images' src={img} alt="" />
            <div className='item-info'>
            <h1 className='items-name'>{name}</h1>
            <h5 className='seconds'>Time: {seconds}S</h5>
            </div>
             <button className='active-btn' onClick={()=>handle(seconds)}>Active </button>
        </div>
    );
};

export default Item;