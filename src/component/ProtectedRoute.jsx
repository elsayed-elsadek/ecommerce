import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        // حفظ المسار الحالي للعودة إليه بعد تسجيل الدخول
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute; 