import Ember from 'ember';

/**
 * General application route.
 *
 * @class ApplicationRoute
 * @extends App.Route
 * @namespace App
 */
export default Ember.Route.extend({
  /**
   * Ember hook called before the model is set.
   *
   * If no transition provided, user should be sent to
   * the about page
   *
   * @function beforeModel
   * @memberof ApplicationRoute
   *
   * @param {object} transition -- attempted user transition
   */
  beforeModel: function(transition) {
    var attempt = transition.targetName;
    if (attempt === 'index') {
      transition.targetName = 'about.index';
    }
    this.replaceWith(transition.targetName);
  }
});
