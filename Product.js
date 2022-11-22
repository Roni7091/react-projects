import React from 'react';
import "../component/Css/Product.css";
import { NavLink } from 'react-router-dom';
const Product = () => {
  return (
    <>
      <div style={{display:"grid"}}>
         {/* <img src={banner} alt="" style={{width:"100%"}} /> */}
               <div classname="contents" style={{width:"100%"}}>
                            <div className='content1'> <NavLink to={"/Breakfast"}> BreakFast </NavLink> </div>
                            <div className='content1'> <NavLink to={"/Lunch"}>Lunch </NavLink> </div>
                            <div className='content1'><NavLink to={"/Beverages"}>Beverages</NavLink></div>
                            <div className='content1'> <NavLink to={"/Deserts"}>Deserts</NavLink></div>
                            
                           
                </div>
                      
    </div>

   </>
  )
}

export default Product;