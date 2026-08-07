const analyticsRepository = require("../repositories/analytics.repository");

const getDashboard = async () => {

    const dashboard = await analyticsRepository.getDashboardStats();

    return {
        success: true,
        message: "Dashboard statistics fetched successfully",
        data: dashboard
    };
};

module.exports = {
    getDashboard
};