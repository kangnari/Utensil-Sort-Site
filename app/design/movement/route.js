import Ember from 'ember';

/**
 * Design movement route.
 *
 * @class DesignMovementRoute
 * @extends App.Route
 * @namespace App
 */
export default Ember.Route.extend({
  /**
   * Ember hook called after the model is resolved.
   * 
   * @function afterModel
   * @memberof DesignMovementRoute
   */
  afterModel: function() {
    var controller = this.controllerFor('design');
    controller.set('notIndex', true);
  }
});
