import React, { useEffect, useState } from 'react';
import './Main.css'
import SectionL from '../Left-Section/SectionL'
import SectionR from '../Right-Section/SectionR'
const Main = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('Active-items.json')
            .then(res => res.json())
        .then(data=>setItems(data))
    }, [])
    const [seconds,setSeconds]=useState(0)
  
    const handleButton = (second) => { 
     setSeconds(seconds + second)
    }

    return (
        <div className='main'>
            <SectionL items={items} handle={handleButton}></SectionL>
            <SectionR seconds ={seconds}></SectionR>
        </div>
    );
};

export default Main;