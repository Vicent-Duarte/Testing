const request = require("supertest");
const app = require ('../app');
const supertest = require("supertest");

let cityId; // guardamos el id para usarlo en las rutas dinamicas
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

test("GET -> BASE_URL/cityId, should return statusCode 200, and res.body.city === city.name", async() => {
    const res = await request(app)
    .get(`${BASE_URL}/${cityId}`)
    
    //console.log(res.body)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(city.name)
})
test("PUT -> BASE_URL/cityId, should return statusCode 200, and res.body.city === cityUpdate.name", async() => {
    const cityUpdate = {
        name: "Barquisimeto",
    };
    const res = await request(app)
    .put(`${BASE_URL}/${cityId}`)
    .send(cityUpdate.name)
    
    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body.name).toBe(cityUpdate.name)
})
test("DELETE -> BASE_URL/cityId, should return statusCode 204", async() => {
    const res = await request(app)
    .delete(`${BASE_URL}/${cityId}`)
    
    expect(res.statusCode).toBe(204)
});

// Rutas dinamicas 
///api/v1/cities
//? BASE_URL  Valor= Dinamico