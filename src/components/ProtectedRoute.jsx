import React from "react";
import { Navigate } from "react-router-dom";

// This is our "Security Guard" component
// It checks if the admin is logged in before showing the page
const ProtectedRoute = ({ children }) => {
    // We check our "notebook" (localStorage) to see if admin is logged in
    const isAdmin = localStorage.getItem("isAdminLoggedIn") === "true";

    // If the admin is NOT logged in, we send them to the login page
    if (!isAdmin) {
        return <Navigate to="/login" />;
    }

    // If they ARE logged in, we let them through to the page
    return children;
};

export default ProtectedRoute;
