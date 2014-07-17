# Ember CLI - Django Rest-Auth

## About ##

A ember component to authenticate against Django Rest-Framework

## Install ##

```bash
npm install ember-cli-django-rest-auth --save-dev
```

## Usage ##

place your auth settings in your environment.js

```js
if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:8000';
    ENV['simple-auth'] = {
      authorizer: 'authorizer:django-rest',
      serverTokenEndpoint: 'http://localhost:8000/api-token-auth/',
      crossOriginWhitelist: ['http://localhost:8000']
    };
```

## Authors ##

* [Thomas Ziegler](http://twitter.com/zauberertz)
