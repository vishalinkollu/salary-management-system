import { useEffect, useState } from "react";
import {Typography,CircularProgress,Box} from "@mui/material";
import api from "../../services/axios";
import DashboardCards from "./DashboardCards";
import DashboardCharts from "./DashboardCharts";
import "./Dashboard.css";

function Dashboard() {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchDashboard = async () => {
        try {
            const response = await api.get("/analytics/dashboard");
            setDashboard(response.data.data);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboard();
    }, []);

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                mt={8}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <Typography
                sx={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    mb: 3,
                    color: "#0F172A"
                }}
            >
                Dashboard
            </Typography>

            <DashboardCards dashboard={dashboard} />

            <Box mt={8}>
                <DashboardCharts />
            </Box>
        </>
    );
}

export default Dashboard;