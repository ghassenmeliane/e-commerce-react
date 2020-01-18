import React from 'react';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import './SignInAndUpPage.scss';


const SignInAndUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndUpPage;