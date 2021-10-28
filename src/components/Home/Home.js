import React, { useEffect, useState } from 'react';
import'./Home.css'
const Home = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
          fetch('http://localhost:5000/services')
          .then(res=>res.json())
          .then(data=>setServices(data))  
    },[])
    console.log(services)
    return (
        <div>
            <h1>total :{services.length}</h1>
            <div className="tour-banner mb-5 d-flex justify-content-center align-items-center"id="home">
                <div   className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                          <h2 className="title">Amazing Tour by TOUR BD </h2>
                          <p className="sub-title">Select Your Best Package For Your Travel with us</p>
                        </div>
                        <div className="col-lg-4 col-md-2">

                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Home;