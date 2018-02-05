const BbPromise = require('bluebird');
const chai = require('chai');

chai.use(require('chai-as-promised'))

const expect = chai.expect;

process.on('unhandledRejection', err => {
    console.log(`UNHANDLED! ${err}`);
    throw err;
});

describe('Variables', function variables() {
    it('simpler', () => {
        return expect(BbPromise.reduce([
            BbPromise.resolve('foo'),
            BbPromise.resolve('bar'),
            BbPromise.reject('reason')
        ])).to.be.rejected;
    })
});
