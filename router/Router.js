class Router {

  constructor(properties = {}) {

      this._statesList = [];
    this._states = [];
    this._currentState;
    /**
     * TODO: Ñapa
     */
    setTimeout( () => {
      this.stateSelector = document.querySelector('[state-view]');
      /**
       * TODO: Esto funciona para todo pero habría que ver como no ñapearlo... una directiva custom?. Onload del elemento html con ese tag?s
       */
       document.addEventListener('click', (ev) => {
         let tempLink = ev.srcElement.attributes['state-link'];
         if( tempLink ) {
           this.goTo(event.srcElement.attributes['state-link'].value);
         }
        })

    }, 100);

    /**
     * Initialize the public state list with the full state list
     */
    for(let state of properties.states) {
      let tempState = new State(state);

      this._states.push(tempState);

      if(!state.private) {
        this._statesList.push(tempState.path);
      }
    };

    this._setCurrentState()
  }

  /**
   * Update the current state of the router
   * @param path {String} the actual path
   * @param params {Array} params for the current state
   */
  _setState(path, params) {
    let stateListIndex = this._statesList.indexOf(path);
    let idx = stateListIndex === -1 ? 0 : stateListIndex;

    this._currentState = this._states[idx];
    //Observable para el currentstate que active esto
    setTimeout( () => {
      this._stateSelection = document.querySelector('[state-view]');
      this._stateSelection.innerHTML = this._currentState.template;
    }, 100);
    this._createHashObserver();
  }

  /**
   * Starts the hash observation in order to mutate the current state
   * @private
   */
  _createHashObserver() {
    window.onhashchange = () => {
     this._setCurrentState();
    }
  }

  /**
   * Get the actual window location and updates the current State
   * @private
   */
  _setCurrentState() {
    let state = window.location.hash.replace('#/', '').split('/');
    this._setState(state[0], state.splice(1));
  }

  /**
   * Returns the public list of states
   * @returns {Array}
   */
  get states() {
    return this._statesList;
  }

  goTo(state) {
    window.location = '#/' + state;
  }
}

