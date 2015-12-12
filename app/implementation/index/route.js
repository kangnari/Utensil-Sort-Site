import Ember from 'ember';

/**
 * Implmenetation index route. Need to set transitions
 * appropriately for animations.
 *
 * @class ImplementationIndexRoute
 * @extends App.Route
 * @namespace App
 */

export default Ember.Route.extend({
  /**
   * Handles the wheel event by transitioning the user
   * to the appropriate route. Remember to add the listener
   * on route enter, and remove it on route exit.
   *
   * @function wheelHandler
   * memberof ImplementationIndexRoute
   *
   * @param {object} e -- wheel event
   */
  wheelHandler: function(e) {
    if (e.deltaY < -30) {
      // Scrolled down. Remove event listener.
      this.transitionTo('implementation.hardware');
    }
  },

  /**
   * Ember hook called after the model is resolved.
   * 
   * @function afterModel
   * @memberof ImplementationIndexRoute
   */
  afterModel: function() {
    var controller = this.controllerFor('implementation');
    controller.set('notIndex', false);
  },

  actions: {
    /**
     * Ember action fired after a successful transition.
     * Called after all other normal model hooks.
     *
     * @funcion didTransition
     * @memberof ImplementationIndexRoute
     */
    didTransition: function() {
      this._onScroll = this.wheelHandler.bind(this);
      Ember.run.scheduleOnce('afterRender', this, function() {
        document.body.addEventListener('wheel', this._onScroll, true);
      });
    },

    /**
     * Ember action fired before a transition.
     * Need to remove the wheelHandler listener to route exit.
     *
     * @funcion didTransition
     * @memberof ImplementationIndexRoute
     */
    willTransition: function(transition) {
      document.body.removeEventListener('wheel', this._onScroll, true);
    }
  }
});
