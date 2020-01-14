import React from 'react';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import './SignIn.scss';

class SignIn extends React.Component{
    state = {
        email: "",
        password: ""
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.setState({email:"",password:""});
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <sapn>sign in with your email and password</sapn>
                <form onSubmit={this.handelSubmit}>
                    
                    <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="email" required/>
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="password" required/>

                    <CustomButton type="submit">SING IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn ;