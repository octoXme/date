import React from 'react';
import MaskedInput from 'react-input-mask';

const DateTextInput = ({ inputRef, ...other}) => {
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask="99 99 9999"
    />
  );
}

export default DateTextInput;
