import React, { useEffect, useState } from 'react';
import useAuth from '../Firebase/useAuth';
import'./Home.css'
const Home = () => {
    const {user}=useAuth();
    const [services,setServices]=useState([])
    useEffect(()=>{
          fetch('http://localhost:5000/services')
          .then(res=>res.json())
          .then(data=>setServices(data))  
    },[])
    const hnadleBooking = (index) => {
        const data = services[index];
        data.email = user?.email
        fetch(`http://localhost:5000/addBooking`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
         
      };
    
    return (
        <div>
            <h1>total :{services.length}</h1>
            <div className="tour-banner mb-5 d-flex justify-content-center align-items-center"id="home">
                <div   className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mb-5">
                          <h2 className="title">Amazing Tour by TOUR BD </h2>
                          <p className="sub-title mb-5">Select Your Best Package For Your Travel with us</p>
                        </div>
                        <div className="col-lg-4 col-md-2">

                        </div>
                    </div>
                </div>
               
            </div>

          <div className="container">
          <div className="d-flex row mb-2 p-5">
                {
                    services.map((service,index)=><div className="col-lg-4 col-md-6 col-sm-12 col-12 extra-style g-2 p-2">
                         <img className="img-fluid" src={service.img} alt="" />
                       <div className="bg-primary text-light p-4">
                       <p>{service.title}</p>
                        <h3>{service.description}</h3>
                        <p>{service.price}per person</p>
                        <button onClick={()=>hnadleBooking(index)} className="btn btn-warning">Select</button>
                       </div>
                       

                    </div>)
               }
            </div>
          </div>
        </div>
    );
};

export default Home;