import React, { useState } from 'react';
import Register from './Register';
import RegisterOTP from './RegisterOTP';
import { useNavigate } from 'react-router-dom';

const RegisterLanding = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState('register');
  const [formData, setFormData] = useState(null);
  const [backpage, setBackPage] = useState(null);
  const [name, setName] = useState("");
  const [personalEmail, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [yearOfPassing, setYearOfPassing] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [instiEmail, setInstiEmail] = useState("");
  const [emergencyPhoneNo, setEmergencyPhoneNo] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  if (localStorage.getItem("token")) {
    navigate("/dashboard");
  }

  return (
    <div>
      {page === 'register' && (
  <Register 
    setPage={setPage} 
    emailC={personalEmail}  
    backpage={backpage} 
    setBackPage={setBackPage}
    name={name}
    setName={setName}
    personalEmail={personalEmail}
    setEmail={setEmail}
    dateOfBirth={dateOfBirth}
    setDateOfBirth={setDateOfBirth}
    yearOfPassing={yearOfPassing}
    setYearOfPassing={setYearOfPassing}
    phoneNo={phoneNo}
    setPhoneNo={setPhoneNo}
    instiEmail={instiEmail}
    setInstiEmail={setInstiEmail}
    emergencyPhoneNo={emergencyPhoneNo}
    setEmergencyPhoneNo={setEmergencyPhoneNo}
    rollNo={rollNo}
    setRollNo={setRollNo}
    department={department}
    setDepartment={setDepartment}
    roomNo={roomNo}
    setRoomNo={setRoomNo}
    password={password}
    setPassword={setPassword}
    confirmPass={confirmPass}
    setConfirmPass={setConfirmPass}
  />
)}

      {page === 'verify-email' && <RegisterOTP setPage={setPage} emailC = {personalEmail} setEmail= {setEmail} backpage={backpage} setBackPage={setBackPage} />}
    </div>
  );
};

export default RegisterLanding;