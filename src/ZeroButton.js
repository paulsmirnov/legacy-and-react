import React from 'react';

export default function ZeroButton(props) {
  return <button onClick={ () => props.onChanged(0) }>{props.value}</button>;
};
