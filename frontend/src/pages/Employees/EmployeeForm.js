import { useState, useEffect } from "react";
import {
    Box,
    Button,
    MenuItem,
    Paper,
    TextField,
    Typography
} from "@mui/material";

function EmployeeForm({
    mode = "add",
    initialValues = {},
    onSubmit
}) {

    const [formData, setFormData] = useState({
        employeeCode: initialValues.employeeCode || "",
        firstName: initialValues.firstName || "",
        lastName: initialValues.lastName || "",
        email: initialValues.email || "",
        phone: initialValues.phone || "",
        gender: initialValues.gender || "MALE",
        countryId: initialValues.countryId || 1,
        departmentId: initialValues.departmentId || 1,
        joiningDate: initialValues.joiningDate
            ? initialValues.joiningDate.substring(0, 10)
            : "",
        currentSalary: initialValues.currentSalary || "",
        status: initialValues.status || "ACTIVE"
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {

        if (!initialValues?.employeeCode) {
            return;
        }

        setFormData({
            employeeCode: initialValues.employeeCode || "",
            firstName: initialValues.firstName || "",
            lastName: initialValues.lastName || "",
            email: initialValues.email || "",
            phone: initialValues.phone || "",
            gender: initialValues.gender || "MALE",
            countryId: initialValues.countryId || 1,
            departmentId: initialValues.departmentId || 1,
            joiningDate: initialValues.joiningDate
                ? initialValues.joiningDate.substring(0, 10)
                : "",
            currentSalary: initialValues.currentSalary || "",
            status: initialValues.status || "ACTIVE"
        });

    }, [initialValues?.employeeCode]);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

    };

    const validate = () => {

        const validationErrors = {};

        if (!formData.employeeCode.trim()) {
            validationErrors.employeeCode = "Employee Code is required";
        }

        if (!formData.firstName.trim()) {
            validationErrors.firstName = "First Name is required";
        }

        if (!formData.lastName.trim()) {
            validationErrors.lastName = "Last Name is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        }

        if (!formData.currentSalary) {
            validationErrors.currentSalary = "Salary is required";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!validate()) {
            return;
        }

        onSubmit(formData);

    };

    return (

        <Paper sx={{ maxWidth: 900, margin: "30px auto", padding: 4 }}>

            <Typography
                variant="h5"
                mb={3}
            >
                {mode === "add"
                    ? "Add Employee"
                    : "Edit Employee"}
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 2
                }}
            >

                <TextField
                    label="Employee Code"
                    name="employeeCode"
                    value={formData.employeeCode}
                    onChange={handleChange}
                    error={!!errors.employeeCode}
                    helperText={errors.employeeCode}
                />

                <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                />

                <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                />

                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                />

                <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <TextField
                    select
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <MenuItem value="MALE">Male</MenuItem>
                    <MenuItem value="FEMALE">Female</MenuItem>
                    <MenuItem value="OTHER">Other</MenuItem>
                </TextField>

                <TextField
                    select
                    label="Country"
                    name="countryId"
                    value={formData.countryId}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>India</MenuItem>
                    <MenuItem value={2}>United States</MenuItem>
                    <MenuItem value={3}>Canada</MenuItem>
                </TextField>

                <TextField
                    select
                    label="Department"
                    name="departmentId"
                    value={formData.departmentId}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Engineering</MenuItem>
                    <MenuItem value={2}>Sales</MenuItem>
                    <MenuItem value={3}>Marketing</MenuItem>
                    <MenuItem value={4}>Finance</MenuItem>
                    <MenuItem value={5}>Human Resources</MenuItem>
                </TextField>

                <TextField
                    type="date"
                    // label="Joining Date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true
                    }}
                />

                <TextField
                    label="Current Salary"
                    name="currentSalary"
                    type="number"
                    value={formData.currentSalary}
                    onChange={handleChange}
                    error={!!errors.currentSalary}
                    helperText={errors.currentSalary}
                />

                <TextField
                    select
                    label="Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <MenuItem value="ACTIVE">Active</MenuItem>
                    <MenuItem value="INACTIVE">Inactive</MenuItem>
                </TextField>

                <Box
                    sx={{
                        gridColumn: "1 / span 2",
                        mt: 2
                    }}
                >
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        {mode === "add"
                            ? "Create Employee"
                            : "Update Employee"}
                    </Button>
                </Box>

            </Box>

        </Paper>

    );

}

export default EmployeeForm;