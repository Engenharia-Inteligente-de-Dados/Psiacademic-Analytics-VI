declare var require: any
export const API = 'https://psiacademicapi-8e796a1392f0.herokuapp.com/v2'
export const OLD_API = "https://api-saude-mental.herokuapp.com/contadores/anos"
export const API_P = 'https://psic-saude-api-1719029c4c08.herokuapp.com'
//export const API_P = "http://127.0.0.1:8000"
export const environment = {
  production: true,
  api:API,
  api_p: API_P,
  VERSION_APP: require('../../package.json').version
};
