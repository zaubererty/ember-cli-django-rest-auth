'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIDjangoRest(project) {
  this.project = project;
  this.name    = 'Ember CLI amd Simple Auth plugin to be used for Django Rest';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIDjangoRest.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-django-rest-auth', name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIDjangoRest.prototype.included = function included(app) {
  this.app = app;
};

module.exports = EmberCLIDjangoRest;
