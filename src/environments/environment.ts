// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverURL: 'ws://192.168.3.2:8080/ws',
  useMocks: false,
  version: require('../../package.json').version + '-dev',
};
