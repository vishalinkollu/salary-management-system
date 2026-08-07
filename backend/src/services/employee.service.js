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

        data: result.employees,

        pagination: {

            page,

            limit,

            totalRecords: result.total,

            totalPages: Math.ceil(result.total / limit)

        }

    };

};

module.exports = {
    getEmployees
};