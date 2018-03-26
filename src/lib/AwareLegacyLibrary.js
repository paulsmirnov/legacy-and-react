import LegacyLibrary from './LegacyLibrary';

export default class AwareLegacyLibrary extends LegacyLibrary {
  // must override to keep track of observers
  constructor(...args) {
    super(...args);
    this._onChange = [];
  }

  // must override to get rid of observers in order to free resources
  dispose() {
    this._onChange.length = 0;
    super.dispose();
  }

  // must override to notify observers about changes
  set(path, value) {
    super.set(path, value);
    this._notify({[path]: value});
  }

  // introduced to notify observers about changes
  _notify(change) {
    this._onChange.forEach((handler) => {
      handler(change);
    });
  }

  // introduced to keep track of observers
  addListener(onChange) {
    if (!this._onChange.includes(onChange)) {
      this._onChange.push(onChange);
    }
  }

  // introduced to keep track of observers
  removeListener(onChange) {
    const index = this._onChange.indexOf(onChange);
    if (index !== -1) {
      this._onChange.splice(index, 1);
    }
  }
}
