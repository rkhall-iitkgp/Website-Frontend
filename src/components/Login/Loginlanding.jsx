import React, { useState } from 'react'
import PasswordLogin from './passwordlogin';
import Login from './Login';
import Otplogin from './otplogin';
import ForgetPassword from './forgetpassword';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    // const navigate = useNavigate()
    // if (localStorage.getItem("token")) {
    //     navigate("/dashboard")
    // }
    const [page, setPage] = useState('login');
    const [email, setEmail] = useState('');
    const [backpage, setBackPage] = useState('login');

    return (
        <div>
            {page === 'login' && <Login setPage={setPage} email={email} setEmail={setEmail} backpage={backpage} setBackPage={setBackPage} />}
            {page === 'plogin' && <PasswordLogin setPage={setPage} email={email} setEmail={setEmail} backpage={backpage} setBackPage={setBackPage} />}
            {page === 'ologin' && <Otplogin setPage={setPage} backpage={backpage} setBackPage={setBackPage} />}
            {page === 'flogin' && <ForgetPassword setPage={setPage} email={email} setEmail={setEmail} backpage={backpage} setBackPage={setBackPage} />}
        </div>
    );
}

export default Landing;