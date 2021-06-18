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
   .login-form {
     display: grid;
     grid-template-columns: 1fr 1fr; 
   }
   `

export default StyledLogSign;
