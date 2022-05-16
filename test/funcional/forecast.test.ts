import supertest from "supertest";

describe('Beach forecast funcional tests' () => {
    if('should return a forecast with just a few times', async() => {
        const { body, status } = await supertest(app).get('/forecast');
        expext(status).toBe(200);
        expect(body).toBe(expected);
    });
})