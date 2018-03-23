import React from 'react';
import ReactDOM from 'react-dom';
import LegacyComponent from './LegacyComponent';
import SmartButton from './SmartButton';
import LegacyWrapper from "./LegacyWrapper";

class ReactWayApp extends React.Component {
  constructor(props) {
    super(props);

    this.onChanged = this.onChanged.bind(this);
    this.onLegacyChanged = this.onLegacyChanged.bind(this);

    this.legacyWrapper = new LegacyWrapper();
  }

  onChanged() {
    this.forceUpdate();
  }

  onLegacyChanged(legacy) {
    this.legacyWrapper.setLegacy(legacy);
    this.forceUpdate();
  }

  render() {
    return <div>
      <LegacyComponent
        onLegacyChanged={ this.onLegacyChanged }
        onPrefsChanged={ this.onChanged }
      />
      <SmartButton prefName='alpha' value={this.legacyWrapper.get('alpha')} onClick={() => { this.legacyWrapper.set('alpha', 0); }}/>
      <SmartButton prefName='beta' value={this.legacyWrapper.get('beta')} onClick={() => { this.legacyWrapper.set('beta', 0); }}/>
    </div>;
  }
}

ReactDOM.render(<ReactWayApp/>, document.getElementById('react-way-app'));
