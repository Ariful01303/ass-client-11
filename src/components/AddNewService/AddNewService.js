import React from 'react';

import { useForm } from "react-hook-form";
import useAuth from '../Firebase/useAuth';
const AddNewService = () => {
    const{user}=useAuth()
   
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
 
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())

    reset();
  };  
 console.log(onSubmit)
    return (
        <div className="container mb-5">
            <h3>Add Torist Spot Details</h3>
             <form onSubmit={handleSubmit(onSubmit)}>
   
     
      <input className="p-2 m-2 w-50" type="text" {...register("displayName")} defaultValue={user.displayName}/> <br />
      <input className="p-2 m-2 w-50" type="email" {...register("email")} defaultValue={user.email} /> <br />
      <input className="p-2 m-2 w-50" type="text" {...register("title")} placeholder="title"/> <br />
      <input className="p-2 m-2 w-50" type="text" {...register("description")} placeholder="Description"/> <br />
      <input className="p-2 m-2 w-50" type="number" {...register("price")} placeholder="price"/> <br />
      <input className="p-2 m-2 w-50" type="text" {...register("package")} placeholder="Day of package"/> <br />
      <input className="p-2 m-2 w-50" {...register("img")} placeholder="Img Url"/> <br />
      <input className="btn btn-primary" type="submit" />
    </form>
        </div>
    );
};

export default AddNewService;