import Base from 'simple-auth/authorizers/base';
import isSecureUrl from './../utils/is-secure-url';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    var accessToken = this.get('session.token');
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
      if (!isSecureUrl(requestOptions.url)) {
        Ember.Logger.warn('Credentials are transmitted via an insecure connection - use HTTPS to keep them secure.');
      }
      jqXHR.setRequestHeader('Authorization', 'Token ' + accessToken);
    }
  }
});