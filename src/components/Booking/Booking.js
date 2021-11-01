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

const handleDeleteBooking = (id) => {
     fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
    
    })
      .then((res) => res.json())
      .then((result) => {
          
        if (result.deletedCount) {
           
           alert("Are you sure?")
           const remaining=booking.filter(bk=>bk._id !==id)
           setBooking(remaining)

        } 
      });
  };
  const handlecomfrom=()=>{
      alert("Are You sure to conform")
  }
    return (
       <div className="container  pb-5">
            <div className="d-flex align-items-center justify-content-center ">
            
            <div className="row ">
            {
                booking.map(bok=><div className="col-lg-12 col-md-12 col-sm-12 col-12 g-2 border extra-style" key={bok._id}>
                   
                    <img src={bok?.img} alt="" />
                    <h4>{bok?.displayName}</h4>
                    <h4>{bok.email}</h4>
                    <h4>{bok?.place}</h4>
                    <h4>{bok.displayName} location: {bok?.location}</h4>
                    <h4>Contact Num :{bok?.contact}</h4>
                    <h4>Stay :{bok?.package}</h4>
                    <h4>Total Amount :{bok?.price}</h4>
                    <p>Date : {bok?.date}</p>
                 
                   <div className="d-flex justify-content-between p-2" >
                   
                    <button className="btn btn-danger mb-2" onClick={handlecomfrom}>Conform</button>
                    <button className="btn btn-danger mb-2" onClick={()=>handleDeleteBooking(bok._id)}>Cencel</button>
                   
                   </div>
                </div>)
            }
            </div>
            
        </div>
       </div>
    );
};

export default Booking;