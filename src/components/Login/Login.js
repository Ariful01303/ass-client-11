import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Firebase/useAuth';
import './Login.css'

const Login = () => {
    const {singInGoogle,user,logOut}=useAuth()
    const location=useLocation();
    const history=useHistory();
    const redirectUrl=location.state?.from||'/';
    const [error, setError] = useState('');
   
    const handleSingInGoogle=()=>{
        singInGoogle()
        .then(result=>{
           history.push(redirectUrl);
           setError('');
        })
        .catch(error => {
            setError("something is wrong");
          })
    } 

    return (
        <div className="login-banner mb-5">
            <div className="div   d-flex container   mt-5 mb-5 justify-content-center align-items-center">
             <div className="login-btn mt-4">
               {user?.email? <button
                  onClick={logOut}
                  className="btn btn-warning m-2 fs-3 w-5"
                >Google Sign Out
                </button> :
                <button
                  onClick={handleSingInGoogle}
                  className="btn btn-primary m-2 text-center fs-3"
                ><i class="fab fa-google-plus iconeg"></i>Google Sign In
                </button>}
               
                <h4 className="pt-5 text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae officia praesentium quidem pariatur, iure sit molestiae assumenda quisquam animi!</h4>
              </div>
             
        </div>
        </div>
    );
};

export default Login;