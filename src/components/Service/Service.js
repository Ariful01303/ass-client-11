import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { _id} = service;

    return (
        
          
                <div className="col-lg-4 col-md-6 g-2 col-sm-12 col-12 border extra-style">
                         <img className="w-75 p-2 " src={service.photo} alt="" />
                       <div className="text-dark p-2">
                       <p>{service.place}</p>
                        <p>{service.description.slice(0,200)}</p>
                        <p>Location: {service.location}</p>
                        <h4>Amount ${service.price}</h4>
                         
                      <div className="d-flex justify-content-between pb-2 ">
                      <p>{service.package} Days</p>
                        <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Booking Detail</button>
            </Link>
                      </div>
                        
                       </div>
        </div>
         
    );
};

export default Service;