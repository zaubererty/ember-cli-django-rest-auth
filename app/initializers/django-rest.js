import Authenticator from './../authenticators/django-rest';
import Authorizer    from './../authorizers/django-rest';


export default {
  name:       'django-rest-auth',
  before:      'simple-auth',
  initialize: function(container, application){
    container.register('authorizer:django-rest', Authorizer);
    container.register('authenticator:django-rest', Authenticator);
  }
};