import styled from 'styled-components';

import {
  cyberFont,
  darkBlue,
  darkGrey,
  headerFont,
  headerGrey,
  paraFont,
  midBlue,
  lightBlue,
  lightestBlue,
  spacing
} from 'src/css_vars.js';

const StyledLogSign = styled.section`
   background-color: ${lightBlue};
   width: 75%;
   margin: 0 auto;
   height: auto;
   padding: 20px;

   .login-form {
     display: grid;
     grid-template-columns: 1fr 1fr; 
     column-gap: 20px;

     .form-wrapper {

        .input-wrapper {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }
     }
   };
   `

export default StyledLogSign;
