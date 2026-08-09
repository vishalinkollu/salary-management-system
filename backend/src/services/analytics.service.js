const analyticsRepository = require("../repositories/analytics.repository");

const getDashboard = async () => {

    const dashboard = await analyticsRepository.getDashboardStats();

    return {
        success: true,
        message: "Dashboard statistics fetched successfully",
        data: dashboard
    };
};

const getCountrySummary = async () => {
    const countries = await analyticsRepository.getCountrySummary();
    return {
        success: true,
        data: countries.map(country => ({
            country: country.name,
            employees: country._count.employees
        }))
    };
};

const getDepartmentSummary = async () => {
    const departments = await analyticsRepository.getDepartmentSummary();
    return {
        success: true,
        data: departments.map(department => ({
            department: department.name,
            employees: department._count.employees
        }))
    };
};

module.exports = {
    getDashboard,
    getCountrySummary,
    getDepartmentSummary
};