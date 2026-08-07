const employeeService = require("../services/employee.service");

const getEmployees = async (req, res, next) => {

    try {

        const response = await employeeService.getEmployees(req.query);

        return res.status(200).json(response);

    } catch (error) {

        next(error);

    }

};

module.exports = {
    getEmployees
};