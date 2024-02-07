import React, { useState } from 'react'
import PasswordLogin from './passwordlogin';
import Login from './Login';
import Otplogin from './otplogin';
import ForgetPassword from './forgetpassword';




const Landing = () => {
    return (
        <div>
            <Login></Login>
            {/* <PasswordLogin></PasswordLogin> */}
            {/* <Otplogin></Otplogin> */}
            {/* <ForgetPassword></ForgetPassword> */}
        </div>
    );
}

export default Landing;