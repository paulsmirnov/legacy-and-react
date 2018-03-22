import LegacyLibrary from './LegacyLibrary';

export default class AwareLegacyLibrary extends LegacyLibrary {
  // must override to keep track of observers
  constructor(...args) {
    super(...args);
    this._onChanged = [];
  }

  // must override to get rid of observers in order to free resources
  dispose() {
    this._onChanged.length = 0;
    super.dispose();
  }

  // must override to notify observers about changes
  set(path, value) {
    super.set(path, value);
    this._notify({[path]: value});
  }

  // introduced to notify observers about changes
  _notify(change) {
    this._onChanged.forEach((handler) => {
      handler(change);
    });
  }

  // introduced to keep track of observers
  addListener(onChanged) {
    if (!this._onChanged.includes(onChanged)) {
      this._onChanged.push(onChanged);
    }
  }

  // introduced to keep track of observers
  removeListener(onChanged) {
    const index = this._onChanged.indexOf(onChanged);
    if (index !== -1) {
      this._onChanged.splice(index, 1);
    }
  }
}
