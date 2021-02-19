import React,{useState,useEffect} from 'react';

import M from 'materialize-css';

const Parallax=() =>{
    useEffect(()=>{
        let elements = document.querySelectorAll('.parallax');
        M.Parallax.init(elements);
    },[]);
        return(
            <div className="parallax-container mt-5">
                    <div className="parallax">
                        <img width="auto" height="auto" src="https://curtisgallon.com/wp-content/uploads/2017/05/top-shot-honey-plate.jpg" alt="parallax images" />
                    </div>
                    <div className="section white">
                        
                    </div>
            </div>
        )
}


export default Parallax;