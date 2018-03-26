import React from 'react';

export default function Input(props) {
  const onChange = (event) => {
    props.onChange(event.target.value);
  };
  return <input type='text' value={ props.value } onChange={ onChange } />;
};
