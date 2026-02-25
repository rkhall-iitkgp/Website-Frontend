import React, { useState } from 'react';
import Card from "@mui/material/Card";
import { MuiOtpInput } from 'mui-one-time-password-input';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { toast } from "react-toastify";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
const RegisterOTP = ({ setPage, emailC, setEmail, backpage, setBackPage }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const [otp, setOtp] = useState('');
  const isMobile = useMediaQuery("(max-width: 920px)");
  
  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const handleVerifyOTP = async () => {
    try {
      const data = {
        emailId: emailC,
        code: otp
      };
      console.log(data);
      
      const verifyResponse = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/verify-email`,
          data,
        { headers: { "Content-Type": "application/json" }
        }
      );

      if (verifyResponse.status == 200) {
        
          toast.success("OTP Verification successful!");
          navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed!");
    }
  };

  const handleResendOTP = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/resend-verification`,
        {
          emailId: emailC
        }
      );
      toast.success("OTP resent successfully!");
    } catch (error) {
      toast.error("Failed to resend OTP!");
    }
  };

  const divStyle = !isMobile ? {
    backgroundImage: "url('/bg_img.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  } : {};

  return (
    <div style={divStyle}>
      <ToastContainer/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Card sx={{ padding: 4, maxWidth: '500px', width: '90%' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <ArrowBackIosNewIcon 
              style={{ cursor: 'pointer', marginRight: 10 }}
              onClick={() => 
                setPage('register')
              }
            />
            <Typography variant="h4">Verify Email</Typography>
          </div>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Please enter the verification code sent to {emailC}
          </Typography>

          <MuiOtpInput
            value={otp}
            onChange={handleChange}
            length={6}
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleVerifyOTP}
            sx={{
              mb: 2,
              backgroundColor: 'black',
              '&:hover': { backgroundColor: 'gray' }
            }}
          >
            Verify OTP
          </Button>

          <Button
            fullWidth
            variant="text"
            onClick={handleResendOTP}
            sx={{ mb: 2 }}
          >
            Resend OTP
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default RegisterOTP;