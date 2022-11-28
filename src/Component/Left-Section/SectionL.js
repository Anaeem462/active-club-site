import React from 'react';
import './SectionL.css'

const SectionL = ({item,handleButton}) => {

    const { img, name, seconds } = item
    return (
            <div className='card'>
            <img className='images' src={img} alt="" />
            <div className='item-info'>
            <h1 className='items-name'>{name}</h1>
            <h5 className='seconds'>Time: {seconds}S</h5>
            </div>
             <button className='active-btn' onClick={()=>handleButton(seconds)}>Active </button>
        </div>
    );
};

export default SectionL;