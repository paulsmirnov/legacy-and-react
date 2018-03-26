import React from 'react';
import ReactDOM from 'react-dom';
import LegacyComponent from './LegacyComponent';
import { LegacyPrefsButton, LegacyPrefsInput } from './legacyPrefsControls';

class ReactWayApp extends React.Component {
  legacy = null;

  onLegacyChange = (changed) => {
    if (changed.legacy !== undefined) {
      this.legacy = changed.legacy;
    }
    this.forceUpdate();
  };

  render() {
    return <div>
      <LegacyComponent onChange={ this.onLegacyChange } />
      <br/>
      alpha = <LegacyPrefsButton legacy={ this.legacy } prefName='alpha' />&nbsp;
      beta  = <LegacyPrefsButton legacy={ this.legacy } prefName='beta' />&nbsp;
      alpha = <LegacyPrefsInput  legacy={ this.legacy } prefName='alpha' />
    </div>;
  }
}

ReactDOM.render(<ReactWayApp/>, document.getElementById('react-way-app'));
