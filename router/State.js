
class State {

  constructor(properties = {}) {
    /**
     * Url path to match the state
     * @type {String}
     * @private
     */
    this._path = properties.path || '';
    /**
     * HTML template
     * @type {string}
     */
    this.template = properties.template || '';
    /**
     * Array with the state params
     * @type {Array}
     */
    this.stateParams = properties.stateParams || [];
    /**
     * Set if the state is private or not
     * @type {boolean}
     */
    this.private = properties.private || false;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

}