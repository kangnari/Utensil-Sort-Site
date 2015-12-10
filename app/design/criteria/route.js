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
   * Handles the wheel event by transitioning the user
   * to the appropriate route. Remember to add the listener
   * on route enter, and remove it on route exit.
   *
   * @function wheelHandler
   * memberof DesignCriteriaRoute
   *
   * @param {object} e -- wheel event
   */
  wheelHandler: function(e) {
    if (e.deltaY < -30) {
      // Scrolled down.
      this.transitionTo('design.choices');
    } else if(e.deltaY > 30) {
      // Scrolled up.
      this.transitionTo('design.index');
    }
  },

  actions: {
    /**
     * Ember action fired after a successful transition.
     * Called after all other normal model hooks.
     *
     * @funcion didTransition
     * @memberof DesignCriteriaRoute
     */
    didTransition: function() {
      this._onScroll = this.wheelHandler.bind(this);
      self = this;
      window.setTimeout(function() {
        Ember.run.scheduleOnce('afterRender', self, function() {
          document.body.addEventListener('wheel', self._onScroll, true);
        });
      }, 750);
    },

    /**
     * Ember action fired before a transition.
     * Need to remove the wheelHandler listener to route exit.
     *
     * @funcion didTransition
     * @memberof DesignCriteriaRoute
     */
    willTransition: function(transition) {
      document.body.removeEventListener('wheel', this._onScroll, true);
    }
  }
});
