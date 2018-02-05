const BbPromise = require('bluebird');
const chai = require('chai');

chai.use(require('chai-as-promised'))

const expect = chai.expect;

process.on('unhandledRejection', err => {
  console.log(`UNHANDLED! ${err}`);
  throw err;
});

class ServerlessError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
};

describe('Variables', function variables() {
  it('simpler', () => {
    const sls = new Serverless();
    return expect(BbPromise.reduce([
      BbPromise.resolve('foo'),
      BbPromise.resolve('bar'),
      BbPromise.reject(new ServerlessError('reason'))
    ])).to.be.rejected;
  })
});
