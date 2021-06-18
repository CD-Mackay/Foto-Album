import React from 'react';
import StyledLabel from './StyledLabel.js';

export default function Label(props) {
  return (
    <StyledLabel>
      <p>{props}</p>
    </StyledLabel>
  )
};