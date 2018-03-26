import React from 'react';
import ReactDOM from 'react-dom';
import LegacyContainer from './LegacyContainer';
import { LegacyPrefsButton, LegacyPrefsInput } from './legacyPrefsControls';

class ReactWayApp extends React.Component {
  _legacy = null;

  _onLegacyChange = (changed) => {
    if (changed.legacy !== undefined) {
      this._legacy = changed.legacy;
    }
    this.forceUpdate();
  };

  render() {
    return <div>
      <LegacyContainer onChange={ this._onLegacyChange } />
      <br/>
      alpha = <LegacyPrefsButton legacy={ this._legacy } prefName='alpha' />&nbsp;
      beta  = <LegacyPrefsButton legacy={ this._legacy } prefName='beta' />&nbsp;
      alpha = <LegacyPrefsInput  legacy={ this._legacy } prefName='alpha' />
    </div>;
  }
}

ReactDOM.render(<ReactWayApp/>, document.getElementById('react-way-app'));
