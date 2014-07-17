import Authenticator from 'app/authenticators/django-rest';
import Authorizer    from 'app/authorizers/django-rest';


export default {
  name:       'django-rest-auth',
  before:      'simple-auth',
  initialize: function(container, application){
  	window.ENV = ShiftPlanerENV;
    container.register('authorizer:django-rest', Authorizer);
    container.register('authenticator:django-rest', Authenticator);
  }
};