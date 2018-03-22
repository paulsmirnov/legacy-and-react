import React from 'react';
import ReactDOM from 'react-dom';
import LegacyComponent from './LegacyComponent';
import SmartButton from './SmartButton';
import AwareLegacyLibrary from "./AwareLegacyLibrary";

class ReactWayApp extends React.Component {
  constructor(props) {
    super(props);

    this.onChanged = this.onChanged.bind(this);
  }

  onChanged() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.legacy = new AwareLegacyLibrary('React-Way', this.domElement);
    this.legacy.addListener(this.onChanged);
    this.onChanged();
  }

  componentWillUnmount() {
    this.legacy.removeListener(this.onChanged);
    this.legacy.dispose();
    this.legacy = null;
  }

  getLegacyPref(prefName) {
    return this.legacy && this.legacy.get(prefName);
  }

  setLegacyPref(prefName, value) {
    if (this.legacy) {
      this.legacy.set(prefName, value);
    }
  }

  render() {
    return <div>
      <LegacyComponent ref={comp => { this.domElement = comp && comp.domElement; }}/>
      <SmartButton prefName='alpha' value={this.getLegacyPref('alpha')} onClick={() => { this.setLegacyPref('alpha', 0); }}/>
      <SmartButton prefName='beta' value={this.getLegacyPref('beta')} onClick={() => { this.setLegacyPref('beta', 0); }}/>
    </div>;
  }
}

ReactDOM.render(<ReactWayApp/>, document.getElementById('react-way-app'));
