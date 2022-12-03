declare var require: any
export const API = 'https://74y128.deta.dev/v2'
export const OLD_API = "https://api-saude-mental.herokuapp.com/contadores/anos"
export const environment = {
  production: true,
  api:API,
  VERSION_APP: require('../../package.json').version
};
