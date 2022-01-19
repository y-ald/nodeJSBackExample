let chai = require('chai');
let server = require('../server');
const supertest = require('supertest');
chai.should();

const api = supertest.agent(server);

describe('GET /api-docs', () => {
    it('it should print return 200', (done) => {
        api.get('/api-docs')
            .end((err, res) => {
                res.status.should.be.equal(301);
                done();
            });
    });
});
