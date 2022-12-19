import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GlobalContext } from './App';

const ProtectedRoute = (props) => {
    const {Component} = props
    const navigate = useNavigate();
    const { globalData, setGlobalData } = useContext(GlobalContext);
    useEffect(() => {
        !globalData.loginStatus && navigate('/login')
    })
    return(
        <Component />
    )
}

export default ProtectedRoute