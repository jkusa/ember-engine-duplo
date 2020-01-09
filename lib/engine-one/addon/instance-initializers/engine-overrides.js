/* global require */

import { getOwner } from '@ember/application';
import config from 'ember-get-config';

const ENGINE = 'engine-one';
const TYPE = 'component';
const REGEX = new RegExp(`^${config.modulePrefix}/${ENGINE}/${TYPE}s/([a-z-]*)$`);

export function initialize(appInstance) {
  const hostApp = getOwner(appInstance.lookup('application:main'));

  //Discover injections from the host app and register them with the engine
  const modules = Object.keys(require.entries); //all modules
  const injections = modules.filter(module => REGEX.test(module)).map(vis => REGEX.exec(vis)[1])

  injections.forEach(name => {
    const c = hostApp.factoryFor(`${ENGINE}/${TYPE}:${name}`).class;
    appInstance.register(`${TYPE}:${name}`, c);
  });
}

export default {
  initialize
};
