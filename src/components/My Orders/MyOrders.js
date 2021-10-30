import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Firebase/useAuth';

const MyOrders = () => {
    const {idNo}=useParams()
    
    const [details,setDetails]=useState([])
    const [detail,setDetail]=useState({})
    useEffect(()=>{
         fetch('http://localhost:5000/services')
         .then(res=>res.json())
         .then(data=>setDetails(data))
    },[])
    useEffect(()=>{
        const founddel=details.find((del)=>del._id===idNo)
               setDetail(founddel)
    },[details])
//     const { user } = useAuth();
//   const [bookings, setBookings] = useState([]);
// //   const [isDelete, setIsDelete] = useState(null);
  
//   useEffect(() => {
//     fetch(`http://localhost:5000/addBooking}`)
//       .then((res) => res.json())
//       .then((data) => setBookings(data));
//   }, [user.email]);

//   console.log(bookings);
//   const handleDeleteProduct =id=> {
//    fetch(`http://localhost:5000/addBooking/${id}`, {
//       method: "DELETE"
      
//     })
//       .then((res) => res.json())
      
//         .then((result) => {
//             // if (result.deletedCount) {
//             //   setIsDelete(true);
//             // } else {
//             //   setIsDelete(false);
//             // }
            
//           });
//         // 
         
   
     
//   };

    return (
        <div className="text-center">
           
           <h2>name{detail?.title}</h2>
        </div>
    );
};

export default MyOrders;