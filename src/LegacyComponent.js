import React from 'react';

const style = {
  width: '100px',
  height: '100px',
  backgroundColor: 'palegreen',
};

export default class LegacyComponent extends React.Component {
  render() {
    return <div style={style} ref={domElement => { this.domElement = domElement; }}>react-way-container-defaults</div>;
  }
}
