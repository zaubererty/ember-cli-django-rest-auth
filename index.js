'use strict';

var path = require('path');
var fs   = require('fs');

function EmberCLIDnD(project) {
  this.project = project;
  this.name    = 'Ember CLI amd Simple Auth plugin to be used for Django Rest';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLIDnD.prototype.treeFor = function treeFor(name) {
  var treePath =  path.join('node_modules', 'ember-cli-django-rest-auth', name);

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLIDnD.prototype.included = function included(app) {
  this.app = app;
};

module.exports = EmberCLIDnD;
