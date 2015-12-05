import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import isSecureUrl from './../utils/is-secure-url';

export default Base.extend({

  init: function() {
    var globalConfig                   = window.ENV['simple-auth'] || {};
    this.serverTokenEndpoint           = globalConfig.serverTokenEndpoint || '/api-token-auth/';
  },

  authenticate: function(credentials) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var data = { username: credentials.identification, password: credentials.password };
      _this.makeRequest(_this.serverTokenEndpoint, data).then(function(response) {
        Ember.run(function() {
          resolve(response);
        });
      }, function(xhr, status, error) {
        Ember.run(function() {
          reject();
        });
      });
    });
  },

  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  invalidate: function(data) {
    function success(resolve) {
      resolve();
    }
    return new Ember.RSVP.Promise(function(resolve, reject) {
      success(resolve);
    });
  },

  makeRequest: function(url, data) {
    if (!isSecureUrl(url)) {
      Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
    }
    return Ember.$.ajax({
      url:         url,
      type:        'POST',
      data:        data,
      dataType:    'json',
      contentType: 'application/x-www-form-urlencoded'
    });
  },
});
