import React from 'react';
import ReactDOM from 'react-dom';
import LegacyComponent from './LegacyComponent';
import ResetButton from './ResetButton';
import Input from './Input';

function withLegacyPrefs(Component) {
  return function LegacyPrefsControl(props) {
    const onChange = (value) => {
      if (props.legacy) {
        props.legacy.set(props.prefName, Number(value) || 0);
      }
    };
    const value = props.legacy && props.legacy.get(props.prefName) || 0;

    return <Component value={ value } onChange={ onChange } />;
  };
}

const LegacyPrefsButton = withLegacyPrefs(ResetButton);
const LegacyPrefsInput = withLegacyPrefs(Input);

class ReactWayApp extends React.Component {
  constructor(props) {
    super(props);

    this.onPrefsChange = this.onPrefsChange.bind(this);
    this.onLegacyChange = this.onLegacyChange.bind(this);

    this.legacy = null;
  }

  onPrefsChange() {
    this.forceUpdate();
  }

  onLegacyChange(legacy) {
    this.legacy = legacy;
    this.forceUpdate();
  }

  render() {
    return <div>
      <LegacyComponent onLegacyChange={ this.onLegacyChange } onPrefsChange={ this.onPrefsChange } />
      <br/>
      alpha = <LegacyPrefsButton legacy={ this.legacy } prefName='alpha' />&nbsp;
      beta  = <LegacyPrefsButton legacy={ this.legacy } prefName='beta' />&nbsp;
      alpha = <LegacyPrefsInput  legacy={ this.legacy } prefName='alpha' />
    </div>;
  }
}

ReactDOM.render(<ReactWayApp/>, document.getElementById('react-way-app'));
