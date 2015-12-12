import Ember from 'ember';

/**
 * Results conclusion route.
 *
 * @class ResultsConclusionRoute
 * @extends App.Route
 * @namespace App
 */

export default Ember.Route.extend({
  /**
   * Ember hook called after the model is resolved.
   * 
   * @function afterModel
   * @memberof ResultsConclusionRoute
   */
  afterModel: function() {
    var controller = this.controllerFor('results');
    controller.set('notIndex', true);
  }
});
