import React from 'react';
import { Link } from "react-router-dom";
import Product from "./Product";
import "./Mobile.css";
import Zoom from 'react-reveal/Zoom';

import 'bootstrap/dist/css/bootstrap.min.css';




function Mobile() {
    return (
<div className="a">
      <div className="home__container">
                    <div className="foo">
                    <Zoom>
  <img className="foo" src="https://m.media-amazon.com/images/I/710xLKSIAaL._SX3000_.jpg" />
</Zoom> 

                    <div className="home__row">
    

   

            
    
          
  
  
            <Product
              id="12321341"
              title="Apple iPhone 11 (64GB) - Black"
              price={60}
              rating={5}
                        image="https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_UY327_QL65_.jpg"
              
            />
           
          
           
            <Product
              id="49538094"
              title="Oppo K9"
              price={45}
              rating={5}
              image="https://fdn2.gsmarena.com/vv/pics/oppo/oppo-k9s-2.jpg"
                       />
          </div>
  
          <div className="home__row">
            <Product
              id="4903850"
              title="Nokia 8.3 5G"
              price={399}
              rating={5}
              image="https://fdn2.gsmarena.com/vv/pics/nokia/nokia-83-5g-2.jpg"
                       />
            <Product
              id="23445930"
              title="Samsung Galaxy F42 5G"
              price={280}
              rating={4.5}
              image="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-f42-5g-2.jpg"
            />
            <Product
              id="3254354345"
              title="
              OnePlus 9RT 5G"
              price={511}
              rating={4}
              image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-rt-2.jpg"
            />
          </div>
  
          <div className="home__row">
            <Product
              id="90829332"
              title="vivo iQOO Z5x"
              price={255}
              rating={4}
              image="https://fdn2.gsmarena.com/vv/pics/vivo/vivo-iqoo-z5x-1.jpg"
            />
            </div>
          </div>
        </div>
        </div>
         )
}


export default Mobile
