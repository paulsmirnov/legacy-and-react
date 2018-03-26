import React from 'react';

export default function ResetButton(props) {
  return <button onClick={ () => props.onChange() }>{JSON.stringify(props.value)}</button>;
};
