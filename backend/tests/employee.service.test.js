const employeeRepository = require("../src/repositories/employee.repository");
const employeeService = require("../src/services/employee.service");

jest.mock("../src/repositories/employee.repository");

describe("Employee Service", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("should throw error when employee code is missing", async () => {

        await expect(
            employeeService.createEmployee({
                firstName: "John",
                lastName: "Doe",
                email: "john@test.com",
                currentSalary: 10000
            })
        ).rejects.toThrow("Employee Code is required");

    });

    test("should throw error for invalid email", async () => {

        await expect(
            employeeService.createEmployee({
                employeeCode: "EMP001",
                firstName: "John",
                lastName: "Doe",
                email: "wrong-email",
                currentSalary: 10000
            })
        ).rejects.toThrow("Invalid email address");

    });

    test("should create employee successfully", async () => {

        employeeRepository.createEmployee.mockResolvedValue({
            id: 1,
            employeeCode: "EMP001"
        });

        const result =
            await employeeService.createEmployee({

                employeeCode: "EMP001",
                firstName: "John",
                lastName: "Doe",
                email: "john@test.com",
                phone: "9999999999",
                gender: "MALE",
                joiningDate: "2025-01-01",
                currentSalary: 50000,
                status: "ACTIVE",
                countryId: 1,
                departmentId: 1
            });

        expect(result.success).toBe(true);
        expect(result.message)
            .toBe("Employee created successfully");

    });

});