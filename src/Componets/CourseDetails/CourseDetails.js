import React, { useState } from 'react';
import fakeData from '../../fakeData/course';
import CourseAdd from '../CourseAdd/CourseAdd';
import Courses from '../Courses/Courses';
import './CourseDetail.scss';


const CourseDetails = () => {

   const [course,setCourse]= useState(fakeData);
   const [cart,setCart]=useState([]);
//    console.log(course);
 
 const handleAddCourse=(product)=>{
    //  console.log('course addeed',product);
     const newCourse=[...cart,product];
     setCart(newCourse);
 }
//   const total= cart.reduce((total,pd)=>total+pd.price,0)
 const total=cart.reduce((total,pd)=>total+pd.price,0);
    return (
        <div className="container-fluid courseDetails">
            <div className="row product-container">
         
          {
                course.map(pd=>
                <Courses course={pd} 
                 key={pd.id}
                handleAddCourse={handleAddCourse}
                >
                </Courses>  )
            }
        
            </div>

            <div>
                <div className='cart-container '>
                    
                  <ul>
                  <h3><b>Order Summery</b></h3>
                  <h5>Course Add:{cart.length}</h5>
                  {
                       
                      cart.map(item => <CourseAdd cart={item}></CourseAdd>)

                  }
                  </ul>

                  <button className='btn btn-primary btn-block p-2 mx-5 checkout'>Checkout <span className="badge badge-light">${total}</span></button>
                </div>
            </div>
    

          
        </div>
    );
};

export default CourseDetails;

