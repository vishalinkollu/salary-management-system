const express = require("express");

const router = express.Router();

const analyticsController = require("../controllers/analytics.controller");

router.get("/dashboard", analyticsController.getDashboard);

router.get("/country-summary", analyticsController.getCountrySummary);

router.get("/department-summary", analyticsController.getDepartmentSummary);

module.exports = router;