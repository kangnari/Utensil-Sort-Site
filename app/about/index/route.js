import Ember from 'ember';

/**
 * About index route. Need to set transitions
 * appropriately for animations.
 *
 * @class AboutIndexRoute
 * @extends App.Route
 * @namespace App
 */

export default Ember.Route.extend({
  /*
   * Ember hook called after the model is set.
   * If the user has already found the hidden utensil,
   * the image should be blank.
   *
   * @function setupController
   * @memberof AboutIndexRoute
   *
   * @param {object} controller -- AboutIndexController
   */
  setupController: function(controller) {
    var appController = this.controllerFor('application');
    var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
    controller.set('soundID', id);
    controller.set('isFound', appController.get('utensils')['about-index']);
  },

  /**
   * Handles the wheel event by transitioning the user
   * to the appropriate route. Remember to add the listener
   * on route enter, and remove it on route exit.
   *
   * @function wheelHandler
   * memberof AboutIndexRoute
   *
   * @param {object} e -- wheel event
   */
  wheelHandler: function(e) {
    if (e.deltaY < -30) {
      // Scrolled down. Remove event listener.
      this.transitionTo('about.project');
    }
  },

  actions: {
    /**
     * Ember action fired after a successful transition.
     * Called after all other normal model hooks.
     *
     * @funcion didTransition
     * @memberof AboutIndexRoute
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
     * @memberof AboutIndexRoute
     */
    willTransition: function(transition) {
      document.body.removeEventListener('wheel', this._onScroll, true);
    },

    /**
     * Called when user has clicked on a hidden utensil. The
     * application should keep track of which utensils have
     * alredy been found.
     *
     * @function foundUtensil
     * memberof AboutIndexRoute
     */
    foundUtensil: function()  {
      var appController = this.controllerFor('application'),
          utensils = appController.get('utensils');

      this.get('controller').set('isFound', true);
      utensils['about-index'] = true;
      appController.set('utensils', utensils);
    }
  }
});
