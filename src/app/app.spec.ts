import request from "supertest";
const _server = require('../index');

describe("Testing the Get endpoint API", () => {
    it("tests our testing framework if it works", (done) => {
        request(_server)
            .get('/api/getData')
            .expect(200, done);
    });
});

describe('"Testing the Post endpoint API"', () => {
    it('should create a new post', (done) => {
        request(_server)
            .post('/api/insertData')
            .send({
                "first_name": "Test",
                "last_name": "Test",
                "emailid": "test@gmail.com"
            })
            .expect(201, done);
    });
});