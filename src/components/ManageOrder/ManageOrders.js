// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';


// const ManageOrders = () => {
//     // const [bookings,setBookings]=useState({})
   
//     const [user, setUser] = useState({});
//     const { idad } = useParams();
//     const onSubmit = data =>{
//         fetch("https://intense-fortress-98735.herokuapp.com/addservice", {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(data),
//           })
//             .then((res) => res.json())
      
//         //   reset();
//         };
//         useEffect(()=>{
//             fetch('https://intense-fortress-98735.herokuapp.com/services')
//             .then(res=>res.json())
//             .then(data=>setDetails(data))
//        },[])
//        useEffect(()=>{
//            const founddel=details.find((del)=>del._id===idad)
//                   setDetail(founddel)
//        },[details])
      


//     return(
   
//         <div>
//             <h2>manage orders{bookings.length} </h2>
//             {
//                 bookings.map(booking=><div className="d-flex">
//                     <h2>{booking.displayName}</h2>
//                     <h2>{booking.title}</h2>
//                     <h2>{booking.price}</h2>
//                     <h2>{booking.description}</h2>
//                     <h2>{booking.email}</h2>
                    
//                 </div>)
//             }
//         </div>
//     );
// };

// export default ManageOrders;