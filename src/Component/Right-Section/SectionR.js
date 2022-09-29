import React, { useEffect, useState } from 'react';
import './SectionR.css'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const SectionR = ({seconds}) => {
    const [breaks, setBreaks] = useState(0);
    
    if (breaks) {
          localStorage.setItem('seconds', breaks)
    } else {
        const localbreak = localStorage.getItem('seconds')
        setBreaks(localbreak)
   }
    const handletoast = () => {
        toast('wow so easy')
    }


    return (
        <div className='right-sight'>
            <div className='user-info'>
                <p className='user'>Abdullah Naeem</p>
                <p className='users-work'>Programming-hero-students</p>
                <p className='user-in'>Batch - 6</p>
            </div>
            <h3>Add A Break</h3>
            <div className='btn-div'>
                <button className='first-btn' onClick={()=>setBreaks(10)}>10s</button>
                <button className='second-btn' onClick={()=>setBreaks(20)}>20s</button>
                <button className='third-btn' onClick={()=>setBreaks(30)}>30s</button>
                <button className='fourth-btn'onClick={()=>setBreaks(40)}>40s</button>
            </div>
            <h3>Details of Exercise :</h3>
            <div className='time'>
                <h2>Exercise time </h2>
                <p>{seconds} seconds</p>
            </div>
            <div className='time'>
                <h2>Breack time</h2>
                <p>{breaks} seconds</p>
            </div>
            <div className='div-btn'>
                 <button className='activity-btn' onClick={handletoast}>Activity Complete</button>
           </div>
            
        </div>
    );
};

export default SectionR;