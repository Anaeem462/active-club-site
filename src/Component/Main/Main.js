import React, { useEffect, useState } from 'react';
import './Main.css'
import SectionL from '../Left-Section/SectionL'
import SectionR from '../Right-Section/SectionR'
const Main = () => {
    const [items, setItems] = useState([])
    const [seconds,setSeconds]=useState(0)

    useEffect(() => {
        fetch('activeitems.json')
        .then(res => res.json())
        .then(data=>setItems(data))
    }, [])
    
    
  
    const handleButton = (second) => {
        setSeconds(seconds + second)
    }

    return (
        <div className='main'>
            <div className='left-side'>
            {
                items.map(item=><SectionL item={item} key={item.id} handleButton={handleButton}></SectionL>)
            }

            </div>
            <div className='right-sight'>
                 <SectionR seconds={seconds}></SectionR>
            </div>
           
           
        </div>
    );
};

export default Main;