import React from 'react';
import { useActionData, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <div>
           <h3>An Error Occurred</h3> 
           <p>{error.message}</p>
           <button onClick={() => navigate('/')}>Go To Home</button>
        </div>
    );
};

export default Error;<h3>An Error Occurred</h3>