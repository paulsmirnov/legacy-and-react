import React from 'react';
import ReactDOM from 'react-dom';
import LegacyComponent from './LegacyComponent';
import { LegacyPrefsButton, LegacyPrefsInput } from './legacyPrefsControls';

class ReactWayApp extends React.Component {
  legacy = null;

  onPrefsChange = () => {
    this.forceUpdate();
  };

  onLegacyChange = (legacy) => {
    this.legacy = legacy;
    this.forceUpdate();
  };

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
