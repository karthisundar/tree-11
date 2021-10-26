import React from 'react';
import { Link } from "react-router-dom";
import './Home1.css';
import Zoom from 'react-reveal/Zoom';




function Home1() {
    return (
        <div className="foo">
            <Zoom>
                <Link to="/Mobile">

        <button className="blink"><i>SEE ALL OFFERS</i></button>
        </Link>
        
            <div className="blink">
            <h1>Welcome To Amazon-Clone</h1>
            <h2>Upto 40% off mobiles </h2>
            </div>
            </Zoom>
            
            <div>
                <img className="foo" src="https://m.media-amazon.com/images/I/71frpR+m6LL._SX3000_.jpg" />

           
            </div>
            <div>          

            </div>
        </div>
    )
}

export default Home1
