import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id} = props.service;

    return (
        
          
                <div className="col-lg-4 col-md-6 g-2 col-sm-12 col-12 border extra-style">
                         <img className="w-75 p-2 " src={props.service.photo} alt="" />
                       <div className="text-dark p-2">
                       <p>{props.service.place}</p>
                        <p>{props.service.description.slice(0,200)}</p>
                        <p>Location: {props.service.location}</p>
                         
                      <div className="d-flex justify-content-between pb-2 ">
                      <p>{props.service.package} Days</p>
                        <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Booking Detail</button>
            </Link>
                      </div>
                        
                       </div>
        </div>
         
    );
};

export default Service;