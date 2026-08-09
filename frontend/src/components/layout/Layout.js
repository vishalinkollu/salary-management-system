import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
    return (
        <Box sx={{ display: "flex" }}>
            <Navbar />
            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    marginTop: "72px",
                    marginLeft: "20px",
                    padding: "12px",
                    background:"linear-gradient(180deg,#f8fafc 0%,#eef2ff 100%)",
                    minHeight: "100vh"
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default Layout;