import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Firebase/useAuth';
import './dash.css'
import { useForm } from "react-hook-form";

 

const MyOrders = () => {
    const {idNo}=useParams()
    const {user}=useAuth()
    const [details,setDetails]=useState([])
    const [detail,setDetail]=useState({})
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
   
      fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
  
      reset();
    };  
//    console.log(onSubmit)
    useEffect(()=>{
         fetch('http://localhost:5000/services')
         .then(res=>res.json())
         .then(data=>setDetails(data))
    },[])
    useEffect(()=>{
        const founddel=details.find((del)=>del._id===idNo)
               setDetail(founddel)
    },[details])
    // const handleAddtobook=()=>{
        
    //     const data = detail;
    //     data.email=user.email;
    //     data.name=user.displayName;
    //     console.log(data)
    //     fetch("http://localhost:5000/booking",{
    //         method:"POST",
    //         headers:{"content-type":"application/json"},
    //         body:JSON.stringify(data)
    //     })
    // }
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
        <div className="div d-flex container   mt-5 mb-5 justify-content-center align-items-center">
        <div className="row p-2">
        <div className="col-lg-6 extra-style  col-md-6 col-sm-12 col-12">
           <img className="img-fluid p-2" src={detail?.photo} alt="" />
           <h4>{detail?.place}</h4>
           <h3>{detail?.description}</h3>
           <h3>{detail?.package}</h3>
           <h3>{detail?.price}</h3>
           <h2>Order By: {user?.displayName}</h2>
          {/* <button onClick={handleAddtobook} className="btn btn-primary">Booking</button> */}
        </div>
        <div  className="extra-sty col-lg-6 m-auto col-md-6 col-sm-12 p-2 col-12 w-50  ">
        
            <h3>Add Torist Details</h3>
             <form onSubmit={handleSubmit(onSubmit)}>
   
     
      <input className="p-2 m-2 w-75" type="text" {...register("displayName")} defaultValue={user.displayName}/> <br />
      <input className="p-2 m-2 w-75" type="email" {...register("email")} defaultValue={user.email} /> <br />
      <input className="p-2 m-2 w-75" type="text" {...register("place")}defaultValue={detail?.place} placeholder="title"/> <br />
      <input className="p-2 m-2 w-75" type="text" {...register("description")}   placeholder="Your location"/> <br />
      <input className="p-2 m-2 w-75" type="number" {...register("price")} placeholder="price"/> <br />
      <input className="p-2 m-2 w-75" type="text" {...register("package")} placeholder="Day of package"/> <br />
      <input className="p-2 m-2 w-75" {...register("date")} type="date"/> <br />
              
      <input className="p-2 m-2 w-75" {...register("img")} placeholder="Img Url"/> <br />
      <input className="btn btn-primary" type="submit" />
    </form>
       
        </div>
      </div>
       </div>
    );
};

export default MyOrders;