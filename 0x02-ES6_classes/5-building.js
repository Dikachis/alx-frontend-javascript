/**
 * Abstract class Building
 * @class Building
 */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this._sqft = sqft;
  }

  // getter for sqft

  get sqft() {
    return this._sqft;
  }
}
