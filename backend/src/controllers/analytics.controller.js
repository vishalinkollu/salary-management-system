const analyticsService = require("../services/analytics.service");

const getDashboard = async (req, res, next) => {
    try {
        const response = await analyticsService.getDashboard();
        return res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};

const getCountrySummary = async (req, res, next) => {
    try {
        const response = await analyticsService.getCountrySummary();
        return res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};

const getDepartmentSummary = async (req, res, next) => {
    try {
        const response = await analyticsService.getDepartmentSummary();
        return res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};

module.exports = {
    getDashboard,
    getCountrySummary,
    getDepartmentSummary
};