import {
    Card,
    Box,
    Typography,
    Chip,
    Avatar,
    Divider
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

import EmployeeActions from "./EmployeeActions";

function EmployeeCard({ employee }) {

    const initials = employee.fullName
        ?.split(" ")
        .slice(0, 2)
        .map(word => word[0])
        .join("")
        .toUpperCase();

    return (

        <Card
            sx={{
                borderRadius: "18px",
                border: "1px solid #ECEAF5",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(15,23,42,0.05)",
                p: 2.5,
                minHeight: 320,
                transition: ".3s",

                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow:
                        "0 10px 24px rgba(124,58,237,.12)"
                }
            }}
        >

            {/* Header */}

            <Box
                sx={{
                    position: "relative"
                }}
            >

                <Chip
                    label={employee.status}
                    size="small"
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,

                        bgcolor:
                            employee.status === "ACTIVE"
                                ? "#DCFCE7"
                                : "#FEE2E2",

                        color:
                            employee.status === "ACTIVE"
                                ? "#16A34A"
                                : "#DC2626",

                        fontWeight: 700,
                        borderRadius: "20px",
                        height: 28
                    }}
                />

                <Box
                    display="flex"
                    gap={2}
                >

                    <Avatar
                        sx={{
                            width: 56,
                            height: 56,
                            bgcolor: "#F3E8FF",
                            color: "#9333EA",
                            fontWeight: 700,
                            fontSize: 22
                        }}
                    >
                        {initials}
                    </Avatar>

                    <Box>

                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "1rem",
                                color: "#1E293B"
                            }}
                        >
                            {employee.fullName}
                        </Typography>

                        <Typography
                            sx={{
                                color: "#8B5CF6",
                                fontWeight: 600,
                                fontSize: "0.8rem"
                            }}
                        >
                            {employee.employeeCode}
                        </Typography>

                    </Box>

                </Box>

            </Box>

            {/* Email */}

            <Box mt={2}>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1
                    }}
                >

                    <EmailOutlinedIcon
                        sx={{
                            fontSize: 16,
                            color: "#94A3B8"
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: "0.8rem",
                            color: "#64748B"
                        }}
                    >
                        {employee.email}
                    </Typography>

                </Box>


            </Box>

            <Divider
                sx={{
                    my: 2
                }}
            />

            {/* Department + Salary */}

            <Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                        }}
                    >

                        <BusinessCenterOutlinedIcon
                            sx={{
                                fontSize: 16,
                                color: "#94A3B8"
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: "0.9rem",
                                color: "#475569"
                            }}
                        >
                            {employee.department}
                        </Typography>

                    </Box>

                    <Typography
                        sx={{
                            fontSize: "0.8rem",
                            color: "#94A3B8"
                        }}
                    >
                        Salary
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1
                        }}
                    >

                        <PublicOutlinedIcon
                            sx={{
                                fontSize: 16,
                                color: "#94A3B8"
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: "0.9rem",
                                color: "#475569"
                            }}
                        >
                            {employee.country}
                        </Typography>

                    </Box>

                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            color: "#334155"
                        }}
                    >
                        ₹{Number(employee.salary).toLocaleString()}
                    </Typography>

                </Box>

            </Box>

            {/* Actions */}

            <Box
                sx={{
                    mt: "auto",
                    pt: 3
                }}
            >
                <EmployeeActions row={employee} />
            </Box>

        </Card>

    );

}

export default EmployeeCard;