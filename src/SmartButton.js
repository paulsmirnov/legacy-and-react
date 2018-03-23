import React from 'react';

export default function SmartButton(props) {
  return <button onClick={ () => props.onChanged(0) }>{props.value}</button>;
};
