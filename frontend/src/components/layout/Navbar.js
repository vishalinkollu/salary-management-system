import {AppBar,Toolbar,Typography,Box} from "@mui/material";
import Groups2Icon from "@mui/icons-material/Groups2";

function Navbar() {

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background:
                    "linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)",
                backdropFilter: "blur(12px)",
                boxShadow:
                    "0 8px 24px rgba(124,58,237,0.25)",
                zIndex: 1300,
                height: 72,
                justifyContent: "center"
            }}
        >

            <Toolbar
                sx={{
                    minHeight: "72px !important",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >

                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                >

                    <Box>
                        <Typography
                            sx={{
                                fontSize: "1.15rem",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                lineHeight: 1.2
                            }}
                        >
                            Employee Salary Management
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "0.78rem",
                                color: "rgba(255,255,255,0.8)"
                            }}
                        >
                            Manage Employees, Salaries & Records
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        px: 2,
                        py: 0.75,
                        borderRadius: "999px",
                        background:
                            "rgba(255,255,255,0.15)",
                        border:
                            "1px solid rgba(255,255,255,0.2)"
                    }}
                >
                    <Typography
                        sx={{
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "0.85rem"
                        }}
                    >
                        Admin Panel
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;