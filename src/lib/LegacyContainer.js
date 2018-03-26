import React from 'react';
import AwareLegacyLibrary from "./AwareLegacyLibrary";

const style = {
  width: '100px',
  height: '100px',
  backgroundColor: 'palegreen',
};

export default class LegacyContainer extends React.Component {
  _legacy = null;

  _onChange = (prefs) => {
    this.props.onChange({prefs});
  };

  componentDidMount() {
    this._legacy = new AwareLegacyLibrary('React-Way', this.domElement);
    this._legacy.addListener(this._onChange);
    this.props.onChange({legacy: this._legacy});
  }

  componentWillUnmount() {
    this._legacy.removeListener(this._onChange);
    this._legacy.dispose();
    this._legacy = null;
    this.props.onChange({legacy: this._legacy});
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div style={ style } ref={ domElement => this.domElement = domElement }/>;
  }
}
