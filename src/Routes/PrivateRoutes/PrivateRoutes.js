import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56 mx-auto mt-40"></progress>
    }

    if(user){
        return children ;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;