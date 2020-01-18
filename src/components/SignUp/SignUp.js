import React from 'react'; 

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './SignUp.scss';

class SignUp extends React.Component{
    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    handelSubmit = async (event) => {
        event.preventDefault();
        const  {displayName, email, password, confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert("password don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user,{displayName});
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const  {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handelSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required/>
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required/>
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required/>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required />
                    <CustomButton type="submit" >SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;