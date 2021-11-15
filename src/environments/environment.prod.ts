declare var require: any
export const API = 'http://api-saude-mental.herokuapp.com'
export const environment = {
  production: false,
  api:API,
  VERSION_APP: require('../../package.json').version
};
