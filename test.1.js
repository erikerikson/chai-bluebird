const BbPromise = require('bluebird');

process.on('unhandledRejection', err => {
  console.log('###########################################################################');
  console.log(`UNHANDLED! ${err}`);
  console.log('###########################################################################');
});

BbPromise.reduce(
  [
    BbPromise.resolve('foo'),
    BbPromise.reject(new Error('reason')),
    BbPromise.resolve('bar')
  ],
  () => {},
  {}
)
  .catch(() => console.log('caught'))
  .then(() => console.log('after'))
