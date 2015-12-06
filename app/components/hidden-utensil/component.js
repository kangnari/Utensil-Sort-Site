import Ember from 'ember';

/**
 * A hidden utensil in the website. Plays a triumphant
 * sound when found and hops off the screen.
 *
 * @class HiddenUtensilComponent
 * @extends App.Component
 * @namespace App
 *
 * @param {string}  type      -- type of utensil (fork, knife, or spoon)
 * @param {string}  soundID   -- unique id for audio player
 * @param {boolean} isFound   -- true if utensil has been found already
 *
 * @property {array}   classNames        -- div classes for this component
 * @property {boolean} isFound           -- utensil is found
 * @property {string}  soundID           -- unique id of audio player
 */

export default Ember.Component.extend({
  classNames: ['hidden-utensil'],
  classNameBindings: ['isFound:found-utensil'],

  /**
   * Returns the appropriate svg file.
   *
   * @function imageFile
   * @memberof HiddenUtensilComponent
   */
  imageFile: Ember.computed('type', function() {
    return 'assets/images/' + this.get('type') + '.svg'
  }),

  /**
   * Ember click function.
   *
   * @function click
   * @memberof HiddenUtensilComponent
   */
  click: function() {
    var soundFile, html;
    if (!this.get('isFound')) {
      soundFile = '"assets/sounds/ta-da.mp3"'
      html = '<audio src=' + soundFile + ' hidden="true" autoplay="true" />';
      document.getElementById(this.get('soundID')).innerHTML = html;
      this.sendAction('action');
    }
  }
});
