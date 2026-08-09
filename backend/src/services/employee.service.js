const employeeRepository = require("../repositories/employee.repository");

const getEmployees = async (query) => {

    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;

    const skip = (page - 1) * limit;

    const where = {};

    if (query.search) {

        where.OR = [
            {
                firstName: {
                    contains: query.search
                }
            },
            {
                lastName: {
                    contains: query.search
                }
            },
            {
                email: {
                    contains: query.search
                }
            },
            {
                employeeCode: {
                    contains: query.search
                }
            }
        ];
    }

    if (query.country) {
        where.country = {
            name: query.country
        };
    }

    if (query.department) {
        where.department = {
            name: query.department
        };
    }

    if (query.status) {
        where.status = query.status;
    }

    let orderBy = {
        createdAt: "desc"
    };

    if (query.sortBy) {
        orderBy = {
            [query.sortBy]: query.sortOrder || "asc"
        };
    }

    const result = await employeeRepository.getEmployees({
        skip,
        take: limit,
        where,
        orderBy
    });

   return {
    success: true,
    message: "Employees fetched successfully",

    data: result.employees.map(employee => ({

        id: employee.id,
        employeeCode: employee.employeeCode,
        fullName: `${employee.firstName} ${employee.lastName}`,
        email: employee.email,
        department: employee.department.name,
        country: employee.country.name,
        salary: employee.currentSalary,
        status: employee.status
    })),

    pagination: {
        page,
        limit,
        totalRecords: result.total,
        totalPages: Math.ceil(result.total / limit)
    }
};

};

const getEmployeeById = async (id) => {

    const employee = await employeeRepository.getEmployeeById(id);

    if (!employee) {
        throw new Error("Employee not found");
    }

    return {
        success: true,
        data: {
            id: employee.id,
            employeeCode: employee.employeeCode,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            phone: employee.phone,
            gender: employee.gender,
            joiningDate: employee.joiningDate,
            currentSalary: employee.currentSalary,
            status: employee.status,
            countryId: employee.countryId,
            departmentId: employee.departmentId,
            country: employee.country.name,
            department: employee.department.name,
            salaryHistory: employee.salaryHistory
        }
    };
};

const createEmployee = async (body) => {

    if (!body.employeeCode?.trim()) {
        throw new Error("Employee Code is required");
    }

    if (!body.firstName?.trim()) {
        throw new Error("First Name is required");
    }

    if (!body.lastName?.trim()) {
        throw new Error("Last Name is required");
    }

    if (!body.email?.trim()) {
        throw new Error("Email is required");
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(body.email)) {
        throw new Error("Invalid email address");
    }

    if (Number(body.currentSalary) <= 0) {
        throw new Error("Salary should be greater than zero");
    }

    const employee =
        await employeeRepository.createEmployee({
            employeeCode: body.employeeCode,
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phone: body.phone,
            gender: body.gender,
            joiningDate: new Date(body.joiningDate),
            currentSalary: Number(body.currentSalary),
            status: body.status,
            countryId: Number(body.countryId),
            departmentId: Number(body.departmentId)
        });

    return {
        success: true,
        message: "Employee created successfully",
        data: employee
    };

};

const updateEmployee = async (id, body) => {

    const employee = await employeeRepository.updateEmployee(id, {
        employeeCode: body.employeeCode,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        gender: body.gender,
        joiningDate: new Date(body.joiningDate),
        currentSalary: Number(body.currentSalary),
        status: body.status,
        countryId: Number(body.countryId),
        departmentId: Number(body.departmentId)
    });

    return {
        success: true,
        message: "Employee updated successfully",
        data: employee
    };
};

const deleteEmployee = async (id) => {

    await employeeRepository.deleteEmployee(id);

    return {
        success: true,
        message: "Employee deleted successfully"
    };
};

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};