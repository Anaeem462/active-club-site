import React from 'react';
import Item from '../Item/Item';
import './SectionL.css'

const SectionL = ({items,handle}) => {
    
    return (
        <div className='left-side'>
        {
                items.map(item => <Item
                    item={item}
                    key={item.id}
                    handle={handle}
                ></Item>)   
        }
        </div>
    );
};

export default SectionL;