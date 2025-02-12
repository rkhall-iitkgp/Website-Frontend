import React, { useState } from 'react';
import Register from './Register';
import RegisterOTP from './RegisterOTP';
import { useNavigate } from 'react-router-dom';

const RegisterLanding = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState('register');
  const [formData, setFormData] = useState(null);
  
  if (localStorage.getItem("token")) {
    navigate("/dashboard");
  }

  return (
    <div>
      {page === 'register' && (
        <Register 
          setPage={setPage} 
          setFormData={setFormData}
        />
      )}
      {page === 'verify-otp' && (
        <RegisterOTP 
          setPage={setPage}
          formData={formData}
        />
      )}
    </div>
  );
};

export default RegisterLanding;