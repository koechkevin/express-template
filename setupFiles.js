import '@babel/polyfill';

global.describe = (message, test) => describe(message, test);
global.it = (message, test) => it(message, test);
global.expect = assertion => expect(assertion);
