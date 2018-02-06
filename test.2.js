const BbPromise = require('bluebird');

process.on('unhandledRejection', err => {
  console.log('###########################################################################');
  console.log(`UNHANDLED! ${err}`);
  console.log('###########################################################################');
});

BbPromise.reduce(
  BbPromise.reject(new Error('reason')),
  () => {},
  {}
)
  .catch(() => console.log('caught'))
  .then(() => console.log('after'))
