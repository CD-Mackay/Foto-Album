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
          <p>I am text</p>
        </div>
        <form>
          <Label message={"Enter Username"} labelFor={"username"} />
          <InputField name={"username"} type={"text"} />
          <Label message={"Enter your SECRET password"} labelForm={"password"} />
          <InputField name={"password"} type={"password"} />
        </form>
      </div>
    </StyledLogSign>
  )
};