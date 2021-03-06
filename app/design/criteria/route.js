import Ember from 'ember';

/**
 * Design criteria route.
 *
 * @class DesignCriteriaRoute
 * @extends App.Route
 * @namespace App
 */

export default Ember.Route.extend({
  /**
   * Ember hook called after the model is resolved.
   * 
   * @function afterModel
   * @memberof DesignCriteriaRoute
   */
  afterModel: function() {
    var controller = this.controllerFor('design');
    controller.set('notIndex', true);
  }
});
