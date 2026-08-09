const employeeService = require("../services/employee.service");

const getEmployees = async (req, res, next) => {

    try {
        const response = await employeeService.getEmployees(req.query);
        return res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const getEmployeeById = async (req, res, next) => {
    try {
        const response = await employeeService.getEmployeeById(req.params.id);
        return res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
};

const createEmployee = async (req, res) => {
    try {
        const response =
            await employeeService.createEmployee(req.body);
        return res.status(201).json(response);
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const response =
            await employeeService.updateEmployee(
                req.params.id,
                req.body
            );
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const response = await employeeService.deleteEmployee(
            req.params.id
        );
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};