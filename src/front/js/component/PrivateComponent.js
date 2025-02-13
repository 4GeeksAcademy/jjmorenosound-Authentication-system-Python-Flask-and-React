import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

export const PrivateComponent = ({ children }) => {
    const { actions } = useContext(Context);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            console.log("Checking authentication...");
            const result = await actions.privacy();
            console.log("Authentication result:", result);
            if (result) {
                setIsAuthenticated(true);
            } else {
                navigate('*');
            }
        };

        checkAuth();
    }, [actions, navigate]);



    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
};
