export default class LegacyLibrary {
  constructor(name, domElement) {
    this._name = name;
    this._domElement = domElement;
    this._prefs = {
      alpha: 0,
      beta: 0,
      bool: false,
      str: 'hello',
    };

    this._onClick = this._onClick.bind(this);
    this._domElement.addEventListener('click', this._onClick);

    this.redraw();
  }

  dispose() {
    this._domElement.removeEventListener('click', this._onClick);
    this._domElement = null;
  }

  _onClick() {
    this.set('alpha', this.get('alpha') + 1);
    this.set('beta', this.get('beta') + 2);
    this.set('bool', !this._prefs.bool);
    this.set('str', this._prefs.str + this._prefs.str.substr(-1));
  }

  get(path) {
    return this._prefs[path];
  }

  set(path, value) {
    this._prefs[path] = value;
    this.redraw();
  }

  redraw() {
    const format = key => `<br/>${key} = ${JSON.stringify(this._prefs[key])}`;
    const formattedPrefs = Object.keys(this._prefs).sort().map(format);
    this._domElement.innerHTML = `<b>${this._name}</b>${formattedPrefs.join('')}`;
  }
}
