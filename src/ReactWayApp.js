import React from 'react';
import ReactDOM from 'react-dom';
import LegacyComponent from './LegacyComponent';
import ZeroButton from './ZeroButton';
import LegacyWrapper from "./LegacyWrapper";

function withLegacy(Component) {
  return function(props) {
    const onChanged = (value) => {
      props.legacy.set(props.prefName, value);
    };
    return <Component value={ props.legacy.get(props.prefName) } onChanged={ onChanged } />;
  };
}

const LegacyZeroButton = withLegacy(ZeroButton);

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
      <LegacyZeroButton legacy={ this.legacyWrapper } prefName='alpha' />
      <LegacyZeroButton legacy={ this.legacyWrapper } prefName='beta' />
    </div>;
  }
}

ReactDOM.render(<ReactWayApp/>, document.getElementById('react-way-app'));
