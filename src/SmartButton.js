import React from 'react';

export default function SmartButton(props) {
  return <button onClick={props.onClick}>React-Way Button: {props.prefName} = {props.value}</button>;
};
