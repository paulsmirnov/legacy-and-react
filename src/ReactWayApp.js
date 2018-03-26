import React from 'react';
import ReactDOM from 'react-dom';
import LegacyContainer from './lib/LegacyContainer';
import {
  LegacyPrefsButton,
  LegacyPrefsInput,
  LegacyPrefsCheckbox
} from './controls/legacyPrefsControls';

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
      alpha = <LegacyPrefsButton legacy={ this._legacy } prefName='alpha' prefType={Number} />&nbsp;
      beta  = <LegacyPrefsButton legacy={ this._legacy } prefName='beta'  prefType={Number} />&nbsp;
      alpha = <LegacyPrefsInput  legacy={ this._legacy } prefName='alpha' prefType={Number} />
      <br/><br/>
      bool =  <LegacyPrefsButton legacy={ this._legacy } prefName='bool'  prefType={Boolean}/>&nbsp;
      bool =  <LegacyPrefsCheckbox legacy={ this._legacy } prefName='bool' prefType={Boolean}/>&nbsp;
      str  =  <LegacyPrefsInput  legacy={ this._legacy } prefName='str'   prefType={String} />&nbsp;
      str  =  <LegacyPrefsButton legacy={ this._legacy } prefName='str'   prefType={String} />
    </div>;
  }
}

ReactDOM.render(<ReactWayApp/>, document.getElementById('react-way-app'));
