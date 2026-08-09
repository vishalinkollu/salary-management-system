import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    Box,
    Paper,
    Typography,
    Avatar,
    Chip,
    Grid,
    Divider
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

import api from "../../services/axios";
import BackButton from "../../components/common/BackButton";

function EmployeeDetails() {

    const { id } = useParams();

    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        fetchEmployee();
    }, [id]);

    const fetchEmployee = async () => {

        try {

            const response = await api.get(`/employees/${id}`);

            setEmployee(response.data.data);

        }
        catch (error) {

            console.error(error);

        }

    };

    if (!employee) {

        return (
            <Typography>
                Loading...
            </Typography>
        );

    }

    const initials =
        `${employee.firstName?.[0] || ""}${employee.lastName?.[0] || ""}`;

    return (

        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "linear-gradient(180deg,#F8FAFC 0%,#F3E8FF 100%)",
                p: 3
            }}
        >

            <BackButton />

            <Paper
                sx={{
                    mt: 2,
                    p: 4,
                    borderRadius: "24px",
                    border: "1px solid #EAE7F5",
                    boxShadow:
                        "0 10px 30px rgba(15,23,42,0.06)"
                }}
            >

                {/* Header */}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 4
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            alignItems: "center"
                        }}
                    >

                        <Avatar
                            sx={{
                                width: 90,
                                height: 90,
                                bgcolor: "#F3E8FF",
                                color: "#9333EA",
                                fontWeight: 700,
                                fontSize: "2rem"
                            }}
                        >
                            {initials}
                        </Avatar>

                        <Box>

                            <Typography
                                sx={{
                                    fontSize: "2rem",
                                    fontWeight: 700,
                                    color: "#1E293B"
                                }}
                            >
                                {employee.firstName} {employee.lastName}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#8B5CF6",
                                    fontWeight: 700
                                }}
                            >
                                {employee.employeeCode}
                            </Typography>

                        </Box>

                    </Box>

                    <Chip
                        label={employee.status}
                        sx={{
                            bgcolor:
                                employee.status === "ACTIVE"
                                    ? "#DCFCE7"
                                    : "#FEE2E2",

                            color:
                                employee.status === "ACTIVE"
                                    ? "#16A34A"
                                    : "#DC2626",

                            fontWeight: 700,
                            borderRadius: "20px"
                        }}
                    />

                </Box>

                <Divider sx={{ mb: 4 }} />

                {/* Employee Information */}

                <Grid
                    container
                    spacing={3}
                >

                    <Grid item xs={12} md={6}>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: "16px",
                                border: "1px solid #EEF2F7",
                                background: "#FAFBFC"
                            }}
                        >

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1}
                                mb={2}
                            >
                                <EmailOutlinedIcon />
                                <Typography
                                    fontWeight={600}
                                >
                                    Email
                                </Typography>
                            </Box>

                            <Typography>
                                {employee.email}
                            </Typography>

                        </Paper>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: "16px",
                                border: "1px solid #EEF2F7",
                                background: "#FAFBFC"
                            }}
                        >

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1}
                                mb={2}
                            >
                                <BusinessCenterOutlinedIcon />
                                <Typography
                                    fontWeight={600}
                                >
                                    Department
                                </Typography>
                            </Box>

                            <Typography>
                                {employee.department}
                            </Typography>

                        </Paper>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: "16px",
                                border: "1px solid #EEF2F7",
                                background: "#FAFBFC"
                            }}
                        >

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1}
                                mb={2}
                            >
                                <PublicOutlinedIcon />
                                <Typography
                                    fontWeight={600}
                                >
                                    Country
                                </Typography>
                            </Box>

                            <Typography>
                                {employee.country}
                            </Typography>

                        </Paper>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: "16px",
                                border: "1px solid #EEF2F7",
                                background: "#FAFBFC"
                            }}
                        >

                            <Box
                                display="flex"
                                alignItems="center"
                                gap={1}
                                mb={2}
                            >
                                <CurrencyRupeeOutlinedIcon />
                                <Typography
                                    fontWeight={600}
                                >
                                    Current Salary
                                </Typography>
                            </Box>

                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "1.4rem",
                                    color: "#334155"
                                }}
                            >
                                ₹
                                {Number(
                                    employee.currentSalary
                                ).toLocaleString()}
                            </Typography>

                        </Paper>

                    </Grid>

                </Grid>

                {/* Salary History */}

                <Typography
                    sx={{
                        mt: 5,
                        mb: 2,
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        color: "#1E293B"
                    }}
                >
                    Salary History
                </Typography>

                {

                    employee.salaryHistory?.map(
                        (salary) => (

                            <Paper
                                key={salary.id}
                                sx={{
                                    p: 2,
                                    mb: 2,
                                    borderRadius: "14px",
                                    border:
                                        "1px solid #EEF2F7"
                                }}
                            >

                                <Typography
                                    fontWeight={700}
                                >
                                    ₹
                                    {Number(
                                        salary.salary
                                    ).toLocaleString()}
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                >
                                    {salary.remarks}
                                </Typography>

                            </Paper>

                        )
                    )

                }

            </Paper>

        </Box>

    );

}

export default EmployeeDetails;