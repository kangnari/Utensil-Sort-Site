import Ember from 'ember';

/**
 * Design navigation route.
 *
 * @class DesignNavigationRoute
 * @extends App.Route
 * @namespace App
 */
export default Ember.Route.extend({
  /**
   * Ember hook called after the model is resolved.
   * 
   * @function afterModel
   * @memberof DesignNavigationRoute
   */
  afterModel: function() {
    var controller = this.controllerFor('design');
    controller.set('notIndex', true);
  }
});
