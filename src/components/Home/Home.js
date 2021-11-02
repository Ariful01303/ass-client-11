import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../Firebase/useAuth';

import Service from '../Service/Service';
import'./Home.css'
const url=(`https://3gwifi.net/wp-content/uploads/2018/05/khai-niem-travel.jpg`)

const Home = () => {
    
    const {loading}=useAuth()
    const [services,setServices]=useState([])
    const [clients,setClients]=useState([])
   
  
    useEffect(()=>{
          fetch('https://intense-fortress-98735.herokuapp.com/services')
          .then(res=>res.json())
          .then(data=>setServices(data)) 
          
    },[])
    useEffect(()=>{
          fetch('https://intense-fortress-98735.herokuapp.com/clients')
          .then(res=>res.json())
          .then(data=>setClients(data)) 
          
    },[])
  
      
    
    return (
        <div>
           
         
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
          <h2 className="text-danger">Perfect for Travel</h2>
          {loading?<Spinner animation="border" variant="warning" /> : 
          <div>
          <div className="d-flex p-5 ">
               
             <div className="row">
             {
                    services.map((service,index)=><Service
                    key={service._id}
                    service={service}></Service>)
                       

                    
               }
             </div>
            </div>
            </div>}
            </div>
         
             
           <div className="container"id="client-sec">
           <h2 className="text-danger">Happy Travelers</h2>
           {loading?<Spinner animation="border" variant="warning" /> : 
          <div>
               <div className="d-flex row">
                   
               {
                   clients.map(client=><div className="col-xl-3 col-md-3 col-sm-6 col-6 p-2 client borer text-center" key={client._id}>
                       <img className="img-fluid" src={client.pictur} alt="" />
                       <h2> {client.name} </h2>
                      
                   </div>)
               }
               </div>
               </div>}
           </div>
           <div id="about">
           <div>
             <div className="mt-5 mb-5 container">
            <h2 className="text-danger mt-5 mb-5" id="about">About us</h2>
            <div className="d-flex justify-content-cente align-items-center row ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <p>Our Focus is on Boutique-Style Hotels and Unique Travel Experiences Worldwide. Contact Us. Join Our Membership Or Book A One Time Trip For Customized Itineraries. Book Your Trip! Customized Itineraries. Boutique Hotels. Hassle-Free Process. Destinations: Asia, Europe, Oceania, The Middle East, North America, Africa, South America.</p>
             </div>

             <div className="col-lg-6">
               <img className="w-100 p-3" src={url}alt="" />
            </div>
            </div>
            

            </div>
        </div>
           </div>
        
        </div>
    );
};

export default Home;