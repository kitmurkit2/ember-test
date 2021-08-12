import Application from '@ember/application';
import Resolver from './resolver';
import Inflector from 'ember-inflector';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

Inflector.inflector.irregular('advert', 'adverts');

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
