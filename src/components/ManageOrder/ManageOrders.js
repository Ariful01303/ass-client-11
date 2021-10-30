import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const [bookings,setBookings]=useState([])
   
  
    useEffect(()=>{
          fetch('http://localhost:5000/addservice')
          .then(res=>res.json())
          .then(data=>setBookings(data)) 
          
    },[])
    return(
   
        <div>
            <h2>manage orders{bookings.length} </h2>
            {
                bookings.map(booking=><div className="d-flex">
                    <h2>{booking.displayName}</h2>
                    <h2>{booking.title}</h2>
                    <h2>{booking.price}</h2>
                    <h2>{booking.description}</h2>
                    <h2>{booking.email}</h2>
                    
                </div>)
            }
        </div>
    );
};

export default ManageOrders;