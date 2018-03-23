import React from 'react';
import AwareLegacyLibrary from "./AwareLegacyLibrary";

const style = {
  width: '100px',
  height: '100px',
  backgroundColor: 'palegreen',
};

export default class LegacyComponent extends React.Component {
  componentDidMount() {
    this.legacy = new AwareLegacyLibrary('React-Way', this.domElement);
    this.legacy.addListener(this.props.onPrefsChanged);
    this.props.onLegacyChanged(this.legacy);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onPrefsChanged !== this.props.onPrefsChanged) {
      this.legacy.removeListener(this.props.onPrefsChanged);
      this.legacy.addListener(nextProps.onPrefsChanged);
    }
  }

  componentWillUnmount() {
    this.legacy.removeListener(this.props.onPrefsChanged);
    this.legacy.dispose();
    this.legacy = null;
    this.props.onLegacyChanged(this.legacy);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div style={ style } ref={ domElement => this.domElement = domElement }/>;
  }
}
