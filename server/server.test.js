const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;


describe('Server', () => {

    describe('GET /', () => {
        it('Should return Hello World! response', (done) => {
            request(app)
                .get('/')
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page Not Found'
                    })
                })
                .expect(404)
                .end(done)
        });
    });

    describe('GET /users', () => {
        it('should return me in the users array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(({body: users}) => {
                    expect(users).toInclude({
                        name: 'Mike',
                        age: 31
                    })
                })
                .end(done);
        });
    });
});





