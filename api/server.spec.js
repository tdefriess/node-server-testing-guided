const request = require('supertest');

const server = require('./server.js');

describe('server.js', function() {
    describe('GET /', () => {
        it('should return 200 OK', async () => {
            const response = await request(server)
                .get('/');

            expect(response.status).toBe(200);
                
        });

        // it('should return 200 OK', () => {
        //     return request(server)
        //         .get('/').expect(200);
                
        // });

        it('should return JSON', () => {
            return request(server).get('/').then(res => {
                expect(res.type).toMatch(/json/i)
            })
        });

        it('should respond with {api: "up"}', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.body.api).toBe('up');
                })
        });
    })
})
// describe('server.js', function() {})
// describe('server.js', function() {})
// describe('server.js', function() {})