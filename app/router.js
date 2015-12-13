import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('design', function() {
    this.route('criteria');
    this.route('image');
    this.route('navigation');
    this.route('movement');
  });
  this.route('implementation', function() {
    this.route('hardware');
    this.route('software');
  });
  this.route('results', function() {
    this.route('product');
    this.route('conclusion');
  });
  this.route('team');
  this.route('about', function() {
    this.route('project');
    this.route('real');
  });
});

export default Router;
