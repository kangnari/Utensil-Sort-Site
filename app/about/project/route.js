import Ember from 'ember';

/**
 * About project route. Need to set transitions
 * appropriately for animations.
 *
 * @class AboutProjectRoute
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
   * memberof AboutProjectRoute
   *
   * @param {object} e -- wheel event
   */
  wheelHandler: function(e) {
    if (e.deltaY < -30) {
      // Scrolled down
      this.transitionTo('about.real');
    } else if (e.deltaY > 30) {
      // Scrolled up
      this.transitionTo('about.index');
    }
  },

  actions: {
    /**
     * Ember action fired after a successful transition.
     * Called after all other normal model hooks.
     *
     * @funcion didTransition
     * @memberof AboutProjectRoute
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
     * @memberof AboutProjectRoute
     */
    willTransition: function(transition) {
      document.body.removeEventListener('wheel', this._onScroll, true);
    }
  }
});
