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
   
      fetch("https://intense-fortress-98735.herokuapp.com/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
  
      reset();
    };  

    useEffect(()=>{
         fetch('https://intense-fortress-98735.herokuapp.com/services')
         .then(res=>res.json())
         .then(data=>setDetails(data))
    },[])
    useEffect(()=>{
        const founddel=details.find((del)=>del._id===idNo)
               setDetail(founddel)
    },[details])
   

    return (
        <div className="div d-flex container   mt-5 mb-5 justify-content-center align-items-center">
        <div className="row p-2">
        <div className="col-lg-6 extra-style  col-md-6 col-sm-12 col-12">
           <img className="img-fluid p-2" src={detail?.photo} alt="" />
           <h4>{detail?.place}</h4>
           <h3>{detail?.description}</h3>
           <h3>Stay There: {detail?.package} Days</h3>
           <h3>Total Cost: {detail?.price}</h3>
           <h2>Order By: {user?.displayName}</h2>
        
        </div>
        <div  className="extra-sty col-lg-6 m-auto col-md-6 col-sm-12 p-2 col-12 w-50  ">
        
            <h3>Add Torist Details</h3>
             <form onSubmit={handleSubmit(onSubmit)}>
   
     
      <input className="p-2 m-2 w-75" type="text" {...register("displayName")} defaultValue={user?.displayName || ''}/> <br />
      <input className="p-2 m-2 w-75" type="email" {...register("email")} defaultValue={user?.email || ''} /> <br />
      <input className="p-2 m-2 w-75" type="text" {...register("place")}defaultValue={detail?.place || ''} placeholder="Title"/> <br />
     
      <input className="p-2 m-2 w-75" type="number" {...register("price")} defaultValue={detail?.price || ''} placeholder="Price"/> <br />
      <input className="p-2 m-2 w-75" type="text" {...register("location")}   placeholder="Your location"/> <br />
      <input className="p-2 m-2 w-75" type="number" {...register("contact")} placeholder="Your Contact Number"/> <br />
      <input className="p-2 m-2 w-75" type="text" {...register("package")}  defaultValue={detail?.package || ''} placeholder="Day of Package"/> <br />
      <input className="p-2 m-2 w-75" {...register("date")} type="date"/> <br />
              
      <input className="p-2 m-2 w-75" {...register("img")} placeholder="Send Your Img Url"/> <br />
      <input className="btn btn-primary" type="submit" />
    </form>
       
        </div>
      </div>
       </div>
    );
};

export default MyOrders;