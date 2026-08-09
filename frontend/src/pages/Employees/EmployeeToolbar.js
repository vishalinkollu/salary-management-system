import {
    Box,
    Button,
    MenuItem,
    Paper,
    TextField,
    Typography,
    InputAdornment,
    Avatar,
    FormControl,
    InputLabel,
    Select
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Groups2Icon from "@mui/icons-material/Groups2";

import { useNavigate } from "react-router-dom";

function EmployeeToolbar({

    search,
    setSearch,

    country,
    setCountry,

    department,
    setDepartment,

    status,
    setStatus,

    totalRecords

}) {

    const navigate = useNavigate();

    return (

        <Paper
            sx={{
                p: 2,
                mb: 2,
                borderRadius: "28px",
                border: "1px solid #E7EAF3",
                boxShadow: "0 8px 30px rgba(15,23,42,0.05)"
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2
                }}
            >

                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                >

                    <Avatar
                        sx={{
                            width: 40,
                            height: 40,
                            bgcolor: "#F3E8FF",
                            color: "#9333EA"
                        }}
                    >
                        <Groups2Icon />
                    </Avatar>

                    <Box>

                        <Typography
                            sx={{
                                fontSize: "30px",
                                fontWeight: 700,
                                color: "#1E1B4B",
                                lineHeight: 1.2
                            }}
                        >
                            Employee Directory
                        </Typography>

                        <Typography
                            sx={{
                                mt: 0.5,
                                color: "#64748B",
                                fontSize: "1rem"
                            }}
                        >
                            Total Employees:
                            <Box
                                component="span"
                                sx={{
                                    color: "#A020F0",
                                    fontWeight: 700,
                                    ml: 1
                                }}
                            >
                                {(totalRecords || 0).toLocaleString()}
                            </Box>
                        </Typography>

                    </Box>

                </Box>

                <Button
                    startIcon={<PersonAddIcon />}
                    onClick={() =>
                        navigate("/employees/add")
                    }
                    sx={{
                        minWidth: 140,
                        height: 50,
                        borderRadius: "14px",
                        textTransform: "none",
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#fff",
                        background:
                            "linear-gradient(135deg,#A855F7,#7C3AED)",

                        boxShadow:
                            "0 12px 28px rgba(124,58,237,.35)",

                        "&:hover": {
                            background:
                                "linear-gradient(135deg,#9333EA,#6D28D9)"
                        }
                    }}
                >
                    Add Employee
                </Button>

            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns:
                        "1.5fr 1fr 1fr 1fr",
                    gap: 3
                }}
            >

                <TextField
                    placeholder="Search Employee..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon
                                    sx={{
                                        color: "#94A3B8"
                                    }}
                                />
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: 56,
                            borderRadius: "14px"
                        }
                    }}
                />

                <FormControl fullWidth>

                    <InputLabel>
                        Country
                    </InputLabel>

                    <Select
                        value={country}
                        label="Country"
                        onChange={(e) =>
                            setCountry(e.target.value)
                        }
                        sx={{
                            height: 56,
                            borderRadius: "14px"
                        }}
                    >

                        <MenuItem value="">
                            All Countries
                        </MenuItem>

                        <MenuItem value="India">
                            India
                        </MenuItem>

                        <MenuItem value="United States">
                            United States
                        </MenuItem>

                        <MenuItem value="Canada">
                            Canada
                        </MenuItem>

                    </Select>

                </FormControl>

                <FormControl fullWidth>

                    <InputLabel>
                        Department
                    </InputLabel>

                    <Select
                        value={department}
                        label="Department"
                        onChange={(e) =>
                            setDepartment(e.target.value)
                        }
                        sx={{
                            height: 56,
                            borderRadius: "14px"
                        }}
                    >

                        <MenuItem value="">
                            All Departments
                        </MenuItem>

                        <MenuItem value="Engineering">
                            Engineering
                        </MenuItem>

                        <MenuItem value="Sales">
                            Sales
                        </MenuItem>

                        <MenuItem value="Marketing">
                            Marketing
                        </MenuItem>

                        <MenuItem value="Finance">
                            Finance
                        </MenuItem>

                        <MenuItem value="Human Resources">
                            Human Resources
                        </MenuItem>

                    </Select>

                </FormControl>

                <FormControl fullWidth>

                    <InputLabel>
                        Status
                    </InputLabel>

                    <Select
                        value={status}
                        label="Status"
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                        sx={{
                            height: 56,
                            borderRadius: "14px"
                        }}
                    >

                        <MenuItem value="">
                            All Status
                        </MenuItem>

                        <MenuItem value="ACTIVE">
                            Active
                        </MenuItem>

                        <MenuItem value="INACTIVE">
                            Inactive
                        </MenuItem>

                    </Select>

                </FormControl>

            </Box>

        </Paper>

    );

}

export default EmployeeToolbar;