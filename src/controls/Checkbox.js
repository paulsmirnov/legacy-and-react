import React from 'react';

export default function Checkbox(props) {
  const onChange = (event) => {
    props.onChange(event.target.checked);
  };
  return <input type='checkbox' checked={ props.value } onChange={ onChange } />;
};
