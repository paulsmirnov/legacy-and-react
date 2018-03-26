import React from 'react';
import AwareLegacyLibrary from "./lib/AwareLegacyLibrary";

const style = {
  width: '100px',
  height: '100px',
  backgroundColor: 'palegreen',
};

export default class LegacyComponent extends React.Component {

  onChange = (prefs) => {
    this.props.onChange({prefs});
  };

  componentDidMount() {
    this.legacy = new AwareLegacyLibrary('React-Way', this.domElement);
    this.legacy.addListener(this.onChange);
    this.props.onChange({legacy: this.legacy});
  }

  componentWillUnmount() {
    this.legacy.removeListener(this.onChange);
    this.legacy.dispose();
    this.legacy = null;
    this.props.onChange({legacy: this.legacy});
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div style={ style } ref={ domElement => this.domElement = domElement }/>;
  }
}
