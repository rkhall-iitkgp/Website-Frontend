import React, { useState } from 'react';
import Register from './Register';
import RegisterOTP from './RegisterOTP';
import { useNavigate } from 'react-router-dom';

const RegisterLanding = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState('register');
  const [formData, setFormData] = useState(null);
  const [backpage, setBackPage] = useState(null);
  const [emailC, setEmail] = useState('');
  
  if (localStorage.getItem("token")) {
    navigate("/dashboard");
  }

  return (
    <div>
      {page === 'register' && <Register setPage={setPage} emailC = {emailC} setEmail= {setEmail} backpage={backpage} setBackPage={setBackPage} />}
      {page === 'verify-email' && <RegisterOTP setPage={setPage} emailC = {emailC} setEmail= {setEmail} backpage={backpage} setBackPage={setBackPage} />}
    </div>
  );
};

export default RegisterLanding;