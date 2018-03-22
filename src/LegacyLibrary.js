export default class LegacyLibrary {
  constructor(name, domElement) {
    this._name = name;
    this._domElement = domElement;
    this._counter = 0;
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
    this.increment();
  }

  getCounter() {
    return this._counter;
  }

  increment() {
    ++this._counter;
    this.notify(this._counter);
  }

  notify(value) {
    this._onChanged.forEach((handler) => {
      handler(value);
    });
  }

  redraw() {
    this._domElement.innerHTML = `${this._name}<br/>counter = ${this._counter}`;
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
