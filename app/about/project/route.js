import Ember from 'ember';

/**
 * About project route. Need to set transitions
 * appropriately for animations.
 *
 * @class AboutProjectRoute
 * @extends App.Route
 * @namespace App
 */

export default Ember.Route.extend({
  /**
   * Ember hook executed when the router enters
   * the route. Need to set transitions here.
   *
   * @function activate
   * @memberof AboutProjectRoute
   */
  activate: function() {
    var controller = this.controllerFor('about');
    controller.set('leftMove', 'about.index');
    controller.set('rightMove', 'about.real');
  }
});
