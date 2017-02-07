
class State {

  constructor(properties = {}) {
    this._path = properties.path || '';
    this.template = properties.template || '';
    this.stateParams = properties.stateParams || [];
    this.private = properties.private || false;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

}