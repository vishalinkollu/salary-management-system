const prisma = require("../config/prisma");

const getEmployees = async ({ skip, take, where, orderBy }) => {

    const employees = await prisma.employee.findMany({
        skip, take, where, orderBy,
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


const getEmployeeById = async (id) => {

    return prisma.employee.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            country: true,
            department: true,
            salaryHistory: {
                orderBy: {
                    effectiveFrom: "desc"
                }
            }
        }
    });
};

const createEmployee = async (employeeData) => {

    return prisma.$transaction(async (tx) => {
        const employee = await tx.employee.create({
            data: employeeData
        });
        const country = await tx.country.findUnique({
            where: {
                id: employee.countryId
            }
        });
        await tx.salaryHistory.create({
            data: {
                employeeId: employee.id,
                salary: employee.currentSalary,
                currency: country.currencyCode,
                effectiveFrom: employee.joiningDate,
                remarks: "Initial Salary"
            }
        });
        return employee;
    });
};

const updateEmployee = async (id, employeeData) => {

    return prisma.$transaction(async (tx) => {
        const existingEmployee = await tx.employee.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                country: true
            }
        });

        if (!existingEmployee) {
            throw new Error("Employee not found");
        }

        const updatedEmployee = await tx.employee.update({
            where: {
                id: Number(id)
            },
            data: employeeData
        });

        if (
            Number(existingEmployee.currentSalary) !==
            Number(employeeData.currentSalary)
        ) {
            const country = await tx.country.findUnique({
                where: {
                    id: employeeData.countryId
                }
            });

            await tx.salaryHistory.create({
                data: {
                    employeeId: updatedEmployee.id,
                    salary: Number(employeeData.currentSalary),
                    currency: country.currencyCode,
                    effectiveFrom: new Date(),
                    remarks: "Salary Updated"
                }
            });
        }
        return updatedEmployee;
    });

};

const deleteEmployee = async (id) => {
    return prisma.$transaction(async (tx) => {
        await tx.salaryHistory.deleteMany({
            where: {
                employeeId: Number(id)
            }
        });
        await tx.employee.delete({
            where: {
                id: Number(id)
            }
        });
    });
};

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};