import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import './Courses.scss';

const Courses = (props) => {
   console.log(props.course)
    const{img,title,price,instructor,level}=props.course;
    
    return (
            <div className='col-md-3' id='course'>
            <div className='my-4 '>
             <h3 >{title}</h3>
             <img style={{width:'200px'}} src={img} alt=""/>
            
            <div className='footer'>
              <p><b>Instructor:</b><small style={{color:'#761064 ',fontSize:'20px'}}>{instructor}</small></p>
              <p><b>Level:<small style={{color:'gray',fontSize:'15px'}}> {level}</small></b></p>
              <h5><TiShoppingCart/> <b><small style={{color:'red',fontSize:'20px'}}>${price}</small></b></h5>
               <h6 style={{color:'#daa520'}}>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
               </h6>
            </div>
            </div>
            <button className='main-button' onClick={()=>props.handleAddCourse(props.course)}>Enrol Now</button>
        </div>
    );
};

export default Courses;