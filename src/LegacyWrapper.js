export default class LegacyWrapper {
  constructor() {
    this._legacy = null;
  }

  setLegacy(legacy) {
    this._legacy = legacy;
  }

  get(prefName) {
    return this._legacy && this._legacy.get(prefName) || 0;
  }

  set(prefName, value) {
    if (this._legacy) {
      this._legacy.set(prefName, Number(value) || 0);
    }
  }
}
