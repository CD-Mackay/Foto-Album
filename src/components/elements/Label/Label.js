import React from 'react';
import StyledLabel from './StyledLabel.js';

export default function Label({message, labelFor}) {
  return (
    <StyledLabel htmlFor={labelFor} >
      {message}
    </StyledLabel>
  )
};