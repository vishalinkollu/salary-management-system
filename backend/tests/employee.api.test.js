const request = require("supertest");
const app = require("../src/app");

describe("Employee APIs", () => {

    test("GET /employees should return employees", async () => {
        const response =
            await request(app)
                .get("/api/v1/employees");
        expect(response.statusCode).toBe(200);
    });

    test("POST /employees should validate payload", async () => {
        const response =
            await request(app)
                .post("/api/v1/employees")
                .send({});
        expect(response.statusCode).toBe(400);
    });
});