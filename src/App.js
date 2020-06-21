import React, { Component } from 'react';
import './App.css';
import Input from './components/UI/Input/Input'

class App extends Component {
  state = {
    registrationForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
        },
        value: ""
      },
      gender: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "male", displayValue: "Male" },
            { value: "female", displayValue: "Female" },
          ],
        },
        value: ""
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
      }
    },
    isFormValid: false,
  };

  registrationHandler = (event) => {

  };
  inputChangeHandler = (event, inputIdentifier) => {
    let updateRegistrationForm = {...this.state.registrationForm};
    let updateRegistrationElement = updateRegistrationForm[inputIdentifier]
    updateRegistrationElement["value"] = event.target.value;
    updateRegistrationForm[inputIdentifier] = updateRegistrationElement;
    this.setState({registrationForm: updateRegistrationForm})
  };
  render() {
    const formElementsArray = [];

      for(let key in this.state.registrationForm) {
        formElementsArray.push({
          id: key,
          config: this.state.registrationForm[key]
        });
      }
    return (
      
      <div>
        <h4>Enter Registration Details</h4>
        <form onSubmit={this.registrationHandler}>
        {formElementsArray.map(formElement => (
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType} 
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangeHandler(event, formElement.id)}
            />))}
        </form>
      </div>
    );
  }
}

export default App;
