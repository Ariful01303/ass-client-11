import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id,name, photo, price, description,  } = props.service;

    return (
        
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 extra-style g-2 p-2">
                         <img className="img-fluid" src={props.service.photo} alt="" />
                       <div className="bg-primary text-light p-4">
                       <p>{props.service.name}</p>
                        <h3>{props.service.description}</h3>
                        <p>{props.service.package}per person</p>
                        <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {name?.toLowerCase()}</button>
            </Link>
                       </div>
        </div>
    );
};

export default Service;