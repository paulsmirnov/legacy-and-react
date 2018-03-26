import React from 'react';

export default function ResetButton(props) {
  return <button onClick={ () => props.onChange(0) }>{props.value}</button>;
};
