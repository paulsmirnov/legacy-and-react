export default class LegacyLibrary {
  constructor(name, domElement) {
    this._name = name;
    this._domElement = domElement;
    this._prefs = {
      alpha: 0,
      beta: 0,
    };
    this._onChanged = [() => { this.redraw(); }];
    this._onClick = this._onClick.bind(this);

    this._domElement.addEventListener('click', this._onClick);

    this.redraw();
  }

  dispose() {
    this._domElement.removeEventListener('click', this._onClick);
    this._domElement = null;
    this._onChanged.length = 0;
  }

  _onClick() {
    this.set('alpha', this.get('alpha') + 1);
    this.set('beta', this.get('beta') + 2);
  }

  get(path) {
    return this._prefs[path];
  }

  set(path, value) {
    this._prefs[path] = value;
    this.notify({[path]: value});
  }

  notify(change) {
    this._onChanged.forEach((handler) => {
      handler(change);
    });
  }

  redraw() {
    const formattedPrefs = Object.keys(this._prefs).sort().map(key => `<br/>${key} = ${this._prefs[key]}`);
    this._domElement.innerHTML = `${this._name}${formattedPrefs.join('')}`;
  }

  addListener(onChanged) {
    if (!this._onChanged.includes(onChanged)) {
      this._onChanged.push(onChanged);
    }
  }

  removeListener(onChanged) {
    const index = this._onChanged.indexOf(onChanged);
    if (index !== -1) {
      this._onChanged.splice(index, 1);
    }
  }
}
