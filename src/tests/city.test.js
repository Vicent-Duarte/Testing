const request = require("supertest");
const app = require ('../app');
const supertest = require("supertest");

let cityId = null; // guardamos el id para usarlo en las rutas dinamicas
const BASE_URL = '/api/v1/cities';

const city = {
    name: "Caracas",
    country: "Venezuela",
    isCapital: true
};


test("POST -> BASE_URL, should return statusCode 201, and res.body.name === city.name", async() => {
    const res = await request(app)
    .post(BASE_URL)
    .send(city)
    
    cityId = res.body.id
    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(city.name)
});

test("GET -> BASE_URL, should return statusCode 200, and res.body.length === 1", async() => {
    const res = await supertest(app)
    .get(BASE_URL)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
});

// Rutas dinamicas 
///api/v1/cities
//? BASE_URL  Valor= Dinamico