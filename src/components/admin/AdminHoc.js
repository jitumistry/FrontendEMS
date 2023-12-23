import React, { useState, useCallback, useEffect } from 'react';
import AdminLogin from './AdminLogin';

const AdminHoc = (WrappedComponent) => {
  const AdminHocComponent = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleLogin = useCallback(() => {
      setLoading(true);

      // Simulate asynchronous login process (replace with actual login logic)
      setTimeout(() => {
        setLoggedIn(true);
        setLoading(false);
      }, 1000);
    }, []);

    useEffect(() => {
      console.log('AdminHoc Rendering, isLoggedIn:', isLoggedIn);
    }, [isLoggedIn]);

    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : isLoggedIn ? (
          <WrappedComponent isLoggedIn={isLoggedIn} />
        ) : (
          <AdminLogin onLogin={handleLogin} />
        )}
      </div>
    );
  };

  return AdminHocComponent;
};

export default AdminHoc;
