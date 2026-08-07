const prisma = require("../config/prisma");

const getDashboardStats = async () => {
    const [
        totalEmployees,
        activeEmployees,
        inactiveEmployees,
        countries,
        departments,
        salaryStats
    ] = await Promise.all([
        prisma.employee.count(),

        prisma.employee.count({
            where: {
                status: "ACTIVE"
            }
        }),

        prisma.employee.count({
            where: {
                status: "INACTIVE"
            }
        }),

        prisma.country.count(),

        prisma.department.count(),

        prisma.employee.aggregate({
            _sum: {
                currentSalary: true
            },
            _avg: {
                currentSalary: true
            },
            _max: {
                currentSalary: true
            },
            _min: {
                currentSalary: true
            }
        })
    ]);

    return {
        totalEmployees,
        activeEmployees,
        inactiveEmployees,
        countries,
        departments,
        totalPayroll: salaryStats._sum.currentSalary,
        averageSalary: salaryStats._avg.currentSalary,
        highestSalary: salaryStats._max.currentSalary,
        lowestSalary: salaryStats._min.currentSalary
    };
};

module.exports = {
    getDashboardStats
};