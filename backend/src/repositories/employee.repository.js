const prisma = require("../config/prisma");

const getEmployees = async ({
    skip,
    take,
    where,
    orderBy
}) => {

    const employees = await prisma.employee.findMany({
        skip,
        take,
        where,
        orderBy,

        include: {
            country: true,
            department: true
        }
    });

    const total = await prisma.employee.count({
        where
    });

    return {
        employees,
        total
    };
};

module.exports = {
    getEmployees
};