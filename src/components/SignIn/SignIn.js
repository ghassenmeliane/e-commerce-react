import React from 'react';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends React.Component{
    state = {
        email: "",
        password: ""
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:"",password:""});
        }catch(error){
            console.error(error);
        }
        
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="email" required/>
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="password" required/>

                <div className="buttons">
                    <CustomButton type="submit">SING IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SING IN WITH GOOGLE</CustomButton>
                
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn ;