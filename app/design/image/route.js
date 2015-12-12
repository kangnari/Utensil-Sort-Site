import Ember from 'ember';

/**
 * Design image route.
 *
 * @class DesignImageRoute
 * @extends App.Route
 * @namespace App
 */

export default Ember.Route.extend({
  /**
   * Ember hook called after the model is resolved.
   * 
   * @function afterModel
   * @memberof DesignImageRoute
   */
  afterModel: function() {
    var controller = this.controllerFor('design');
    controller.set('notIndex', true);
  }
});
