const employeeController = require("../src/controllers/employee.controller");
const employeeService = require("../src/services/employee.service");

jest.mock("../src/services/employee.service");

describe("Employee Controller", () => {
    test("getEmployees returns success", async () => {
        const req = {
            query: {}
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const next = jest.fn();
        employeeService.getEmployees.mockResolvedValue({
            success: true
        });
        await employeeController.getEmployees(
            req,
            res,
            next
        );

        expect(res.status)
            .toHaveBeenCalledWith(200);
    });
});