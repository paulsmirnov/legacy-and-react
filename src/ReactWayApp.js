import React from 'react';
import ReactDOM from 'react-dom';
import LegacyComponent from './LegacyComponent';
import ResetButton from './ResetButton';
import Input from './Input';
import LegacyWrapper from "./LegacyWrapper";

function withLegacyPrefs(Component) {
  return function LegacyPrefsControl(props) {
    const onChange = (value) => {
      props.legacy.set(props.prefName, value);
    };
    return <Component value={ props.legacy.get(props.prefName) } onChange={ onChange } />;
  };
}

const LegacyPrefsButton = withLegacyPrefs(ResetButton);
const LegacyPrefsInput = withLegacyPrefs(Input);

class ReactWayApp extends React.Component {
  constructor(props) {
    super(props);

    this.onPrefsChange = this.onPrefsChange.bind(this);
    this.onLegacyChange = this.onLegacyChange.bind(this);

    this.legacyWrapper = new LegacyWrapper();
  }

  onPrefsChange() {
    this.forceUpdate();
  }

  onLegacyChange(legacy) {
    this.legacyWrapper.setLegacy(legacy);
    this.forceUpdate();
  }

  render() {
    return <div>
      <LegacyComponent onLegacyChange={ this.onLegacyChange } onPrefsChange={ this.onPrefsChange } />
      <br/>
      alpha = <LegacyPrefsButton legacy={ this.legacyWrapper } prefName='alpha' />&nbsp;
      beta  = <LegacyPrefsButton legacy={ this.legacyWrapper } prefName='beta' />&nbsp;
      alpha = <LegacyPrefsInput  legacy={ this.legacyWrapper } prefName='alpha' />
    </div>;
  }
}

ReactDOM.render(<ReactWayApp/>, document.getElementById('react-way-app'));
