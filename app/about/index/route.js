import Ember from 'ember';

/**
 * About index route. Need to set transitions
 * appropriately for animations.
 *
 * @class AboutIndexRoute
 * @extends App.Route
 * @namespace App
 */

export default Ember.Route.extend({
  /**
   * Ember hook executed when the router enters
   * the route. Need to set transitions here.
   *
   * @function activate
   * @memberof AboutIndexRoute
   */
  activate: function() {
    var controller = this.controllerFor('about');
    controller.set('leftMove', null);
    controller.set('rightMove', 'about.project');
  }
});
