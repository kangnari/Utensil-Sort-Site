import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('design');
  this.route('implementation');
  this.route('results');
  this.route('conclusion');
  this.route('team');
  this.route('additional');
  this.route('about', function() {
    this.route('project');
    this.route('real');
  });
});

export default Router;
