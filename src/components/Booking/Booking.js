import React, { useEffect, useState } from 'react';
import useAuth from '../Firebase/useAuth';

const Booking = () => {
const {user}=useAuth()
const email=user?.email;
const [booking,setBooking]=useState([])

useEffect(()=>{
    fetch(`http://localhost:5000/booking/${email}`)
    .then(res=>res.json())
    .then(data=>setBooking(data))

},[user?.email])

const handleDeleteProduct = (id) => {
     fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
    
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result)
        if (result.deletedCount) {
           
           alert("Are you sure?")
           const remaining=booking.filter(bk=>bk._id !==id)
           setBooking(remaining)

        } 
      });
  };

    return (
       <div className="container  pb-5">
            <div className="d-flex align-items-center justify-content-center ">
            
            <div className="row ">
            {
                booking.map(bok=><div className="col-lg-12 col-md-12 col-sm-12 col-12 g-2 border extra-style" key={bok._id}>
                   
                   
                    <h4>{bok.displayName}</h4>
                    <h4>{bok.email}</h4>
                 
                    <button className="btn btn-danger mb-2" onClick={()=>handleDeleteProduct(bok._id)}>Cencel</button>
                   
                </div>)
            }
            </div>
            
        </div>
       </div>
    );
};

export default Booking;