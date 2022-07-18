import React from "react";
import { Link } from "react-router-dom";
import { validateAll } from "indicative/validator";
import Axios from "axios";
import PropTypes from 'prop-types';
import SignUpForm from "./SignupForm";

// import config from " ../../config"

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: {},
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("request initiated")
    //const data = this.state;

    // const rules = {
    //   name: "required|string",
    //   email: "required|email",
    //   password: "required|string|min:6|confirmed",
    // };

    // const messages = {
    //   required: "The {{feild}} is requird.",
    //   "email.email": "The eamil is invalid",
    //   "password.confirmed": "The password configuration did not match",
    // };


   // await validateAll(data, rules, messages)
  //   try {
  //     const response = await Axios.post(`https://62c7d17e0f32635590cad3ff.mockapi.io/BlogApplication`, {
  //       name: this.state.name,
  //       email: this.state.email,
  //       password: this.state.password//     })
        // try {
      //   const user = await this.props.registerUser(this.state)
      //   localStorage.setItem('user', JSON.stringfy(user))
      //   this.props.setAuthUser(user)
      //   this.props.history.push('/')



      // } catch(errors){
      //   this.setState({errors});
      // }
      // catch (errors) {
  //       const formattedErrors = {};
  //       formattedErrors['email'] = errors.response.data['email'][0];
  //       // formattedErrors["password"] = errors.response.data["password"][0];
  //       this.setState({
  //         errors: formattedErrors
  //       })
  //     }


  //   }
  //   catch (errors) {
  //     const formattedErrors = {};
  //     errors.forEach(
  //       (error) => (formattedErrors[error.feild] = error.message)
  //     );
  //     this.setState({
  //       errors: formattedErrors,
  //     });
  //   }

  try{
    const user = await  this.props.registerUser(this.state);
    this.props.setAuthUser(user)
    localStorage.setItem('user', JSON.stringfy(user))
    this.props.history.push('/')
    console.log('Success')
   } 
   
   catch (errors){
    console.log(errors)
    this.setState({errors})
   }

  }
  render() {
    console.log(this.state);
    return (
      <SignUpForm
      handleInputChange={this.handleInputChange}
      handleSubmit={this.handleSubmit}
      errors={this.state.errors}
    />
    
  );
}
}
Signup.propTypes={
registerUser:PropTypes.func.isRequired,
setAuthUser:PropTypes.func.isRequired, 
history:PropTypes.func.isRequired
}

export default Signup;