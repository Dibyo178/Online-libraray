import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import './CourseAdd.scss';
const CourseAdd = (props) => {
    console.log(props)
    const {title,price,instructor}=props.cart;
    return (
        <section className='cartSection'>
            <div>
            <li className='className="list-group-item d-flex my-2 shadow justify-content-between"'>
               <div>
               <span style={{color: '#891E1E'}}>{title}</span>
               <br />
                <span><b>Instructor: </b>{instructor}</span>
                <br />
                <span><TiShoppingCart/> <span  style={{color: 'red'}}>${price}</span></span>
               </div>
                </li>
            </div>
           
        
        </section>
        
    );
};

export default CourseAdd;