declare var require: any
export const API = 'http://api-saude-mental.herokuapp.com'
export const OLD_API = "https://api-saude-mental.herokuapp.com/contadores/anos"

export const environment = {
  production: false,
  api:API,
  VERSION_APP: require('../../package.json').version
};
