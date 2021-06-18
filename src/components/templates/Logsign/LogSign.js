import React from 'react';
import InputField from 'elements/InputField/InputField.js';
import Label from 'elements/Label/Label.js';
import StyledLogSign from './StyledLogSign.js';


export default function LogSign(props) {
  return (
    <StyledLogSign>
      <h2>Login</h2>
      <div className="login-form">
        <div className="text-wrapper">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className="form-wrapper">
          <form>
            <Label message={"Enter Username"} labelFor={"username"} />
            <br/>
            <InputField name={"username"} type={"text"} />
            <br/>
            <Label message={"Enter your *SECRET* password"} labelForm={"password"} />
            <br/>
            <InputField name={"password"} type={"password"} />
            <br/>
          </form>
        </div>
      </div>
    </StyledLogSign>
  )
};