const express = require("express");

const employeeRoutes = require("./employee.routes");
const analyticsRoutes = require("./analytics.routes");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        application: "Employee Salary Management API",
        version: "1.0.0"
    });
});

router.use("/employees", employeeRoutes);

router.use("/analytics", analyticsRoutes);

module.exports = router;