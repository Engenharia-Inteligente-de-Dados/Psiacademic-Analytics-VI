// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

declare var require: any
export const API = 'https://psic-saude-api-1719029c4c08.herokuapp.com'
export const OLD_API = "https://api-saude-mental.herokuapp.com/contadores/anos"
export const API_P = 'https://psiacademic-api-v2-8e2f0e43ff4b.herokuapp.com'
//export const API_P = "http://127.0.0.1:8000"
export const environment = {
  production: false,
  api:API,
  api_p: API_P,
  VERSION_APP: require('../../package.json').version

};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
