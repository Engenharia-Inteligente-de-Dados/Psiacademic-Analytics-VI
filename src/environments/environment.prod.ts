declare var require: any
export const API = 'https://psiacademic-api.herokuapp.com/v2'
export const OLD_API = "https://api-saude-mental.herokuapp.com/contadores/anos"
export const environment = {
  production: false,
  api:API,
  VERSION_APP: require('../../package.json').version

};
