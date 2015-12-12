import Ember from 'ember';

/**
 * Results product route.
 *
 * @class ImplementationHardwareRoute
 * @extends App.Route
 * @namespace App
 */

export default Ember.Route.extend({
  /**
   * Ember hook called after the model is resolved.
   * 
   * @function afterModel
   * @memberof ImplementationHardwareRoute
   */
  afterModel: function() {
    var controller = this.controllerFor('implementation');
    controller.set('notIndex', true);
  }
});
