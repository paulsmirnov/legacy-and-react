import React from 'react';
import ReactDOM from 'react-dom';
import LegacyComponent from './LegacyComponent';
import SmartButton from './SmartButton';
import LegacyLibrary from "./LegacyLibrary";

class ReactWayApp extends React.Component {
  constructor(props) {
    super(props);

    this.onChanged = this.onChanged.bind(this);
  }

  onChanged() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.legacy = new LegacyLibrary('React-Way', this.domElement);
    this.legacy.addListener(this.onChanged);
    this.onChanged();
  }

  componentWillUnmount() {
    this.legacy.removeListener(this.onChanged);
    this.legacy.dispose();
    this.legacy = null;
  }

  render() {
    return <div>
      <LegacyComponent ref={comp => { this.domElement = comp && comp.domElement; }}/>
      <SmartButton value={this.legacy && this.legacy.getCounter()} onClick={() => { this.legacy.increment(); }}/>
    </div>;
  }
}

ReactDOM.render(<ReactWayApp/>, document.getElementById('react-way-app'));
