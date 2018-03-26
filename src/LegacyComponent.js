import React from 'react';
import AwareLegacyLibrary from "./lib/AwareLegacyLibrary";

const style = {
  width: '100px',
  height: '100px',
  backgroundColor: 'palegreen',
};

export default class LegacyComponent extends React.Component {
  componentDidMount() {
    this.legacy = new AwareLegacyLibrary('React-Way', this.domElement);
    this.legacy.addListener(this.props.onPrefsChange);
    this.props.onLegacyChange(this.legacy);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.onPrefsChange !== this.props.onPrefsChange) {
      this.legacy.removeListener(this.props.onPrefsChange);
      this.legacy.addListener(nextProps.onPrefsChange);
    }
  }

  componentWillUnmount() {
    this.legacy.removeListener(this.props.onPrefsChange);
    this.legacy.dispose();
    this.legacy = null;
    this.props.onLegacyChange(this.legacy);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div style={ style } ref={ domElement => this.domElement = domElement }/>;
  }
}
