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
    // console.log(id);

    fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
    
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result)
        if (result) {
           
        //    alert("deleted")
           const remaining=booking.filter(bk=>bk._id !==id)
           setBooking(remaining)

        } 
      });
  };
//   console.log(handleDeleteProduct.value)
    return (
        <div>
            <h2>{booking.length}</h2>
            {
                booking.map(bok=><div key={bok._id}>
                    <h2>{bok.email}</h2>
                    <button onClick={()=>handleDeleteProduct(bok._id)}>delete</button>
                </div>)
            }
        </div>
    );
};

export default Booking;