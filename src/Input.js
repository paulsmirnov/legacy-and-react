import React from 'react';

export default function Input(props) {
  const onChanged = (event) => {
    props.onChanged(event.target.value);
  };
  return <input type='text' value={ props.value } onChange={ onChanged } />;
};
