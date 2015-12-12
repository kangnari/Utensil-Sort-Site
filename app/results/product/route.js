import Ember from 'ember';

/**
 * Results product route.
 *
 * @class ResultsProductRoute
 * @extends App.Route
 * @namespace App
 */

export default Ember.Route.extend({
  /**
   * Ember hook called after the model is resolved.
   * 
   * @function afterModel
   * @memberof ResultsProductRoute
   */
  afterModel: function() {
    var controller = this.controllerFor('results');
    controller.set('notIndex', true);
  }
});
