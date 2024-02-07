import React, { useState } from 'react'
import PasswordLogin from './passwordlogin';
import Login from './Login';
import Otplogin from './otplogin';
import ForgetPassword from './forgetpassword';

const Landing = () => {
    const [page, setPage] = useState('login');
    const [email, setEmail] = useState('');

    return (
        <div>
            {page === 'login' && <Login setPage={setPage} email={email} setEmail={setEmail} />}
            {page === 'plogin' && <PasswordLogin setPage={setPage} email={email} setEmail={setEmail} />}
            {page === 'ologin' && <Otplogin setPage={setPage} />}
            {page === 'flogin' && <ForgetPassword setPage={setPage} email={email} setEmail={setEmail} />}
        </div>
    );
}

export default Landing;