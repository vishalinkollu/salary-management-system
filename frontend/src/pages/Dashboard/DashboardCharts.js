import { useEffect, useState } from "react";
import {Grid,Card,CardContent,Typography,Box} from "@mui/material";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell
} from "recharts";

import api from "../../services/axios";

const COLORS = [
    "#2563EB",
    "#16A34A",
    "#EA580C",
    "#7C3AED",
    "#0891B2"
];

function DashboardCharts() {

    const [countryData, setCountryData] = useState([]);
    const [departmentData, setDepartmentData] = useState([]);

    useEffect(() => {
        fetchCharts();
    }, []);

    const fetchCharts = async () => {
        try {
            const countryResponse =
                await api.get("/analytics/country-summary");

            const departmentResponse =
                await api.get("/analytics/department-summary");
            setCountryData(countryResponse.data.data);
            setDepartmentData(departmentResponse.data.data);
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <Grid
            container
            spacing={4}
            sx={{
                mt: 5
            }}
        >

            {/* Department Chart */}

            <Grid
                item
                xs={12}
                lg={5}
            >

                <Card
                    sx={{
                        borderRadius: "20px",
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 4px 18px rgba(15,23,42,0.06)",
                        height: 450
                    }}
                >

                    <CardContent
                        sx={{
                            p: 4
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: "1.35rem",
                                fontWeight: 700,
                                mb: 2
                            }}
                        >

                            Employees by Department

                        </Typography>

                        <Box mt={2}>

                            <ResponsiveContainer
                                width="100%"
                                height={260}
                            >

                                <BarChart
                                    data={departmentData}
                                    barCategoryGap="25%"
                                >

                                    <XAxis
                                        dataKey="department"
                                        angle={-20}
                                        textAnchor="end"
                                        height={70}
                                        tick={{
                                            fontSize: 12
                                        }}
                                    />

                                    <YAxis />

                                    <Tooltip />

                                    <Bar
                                        dataKey="employees"
                                        fill="#2563EB"
                                        radius={[10, 10, 0, 0]}
                                        maxBarSize={55}
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </Box>

                        <Typography
                            sx={{
                                mt: 2,
                                textAlign: "center",
                                color: "#64748B"
                            }}
                        >

                            Distribution of employees across departments

                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            {/* Country Chart */}

            <Grid
                item
                xs={12}
                lg={7}
            >

                <Card
                    sx={{
                        borderRadius: "20px",
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 4px 18px rgba(15,23,42,0.06)",
                        height: 450
                    }}
                >

                    <CardContent
                        sx={{
                            p: 4
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: "1.35rem",
                                fontWeight: 700,
                                mb: 2
                            }}
                        >

                            Employees by Country

                        </Typography>

                        <ResponsiveContainer
                            width="100%"
                            height={260}
                        >

                            <PieChart>

                                <Pie
                                    data={countryData}
                                    dataKey="employees"
                                    nameKey="country"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={95}
                                >

                                    {

                                        countryData.map(
                                            (entry, index) => (

                                                <Cell
                                                    key={index}
                                                    fill={
                                                        COLORS[
                                                        index %
                                                        COLORS.length
                                                        ]
                                                    }
                                                />

                                            )
                                        )

                                    }

                                </Pie>

                                <Tooltip />

                            </PieChart>

                        </ResponsiveContainer>

                        {/* Country Legend Row */}

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 3,
                                flexWrap: "wrap",
                                mt: 1
                            }}
                        >

                            {

                                countryData.map(
                                    (item, index) => (

                                        <Box
                                            key={item.country}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1
                                            }}
                                        >

                                            <Box
                                                sx={{
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: "50%",
                                                    backgroundColor:
                                                        COLORS[
                                                        index %
                                                        COLORS.length
                                                        ]
                                                }}
                                            />

                                            <Typography
                                                sx={{
                                                    fontSize: "0.9rem",
                                                    fontWeight: 600,
                                                    color: "#475569"
                                                }}
                                            >

                                                {item.country}
                                                {" "}
                                                ({item.employees})

                                            </Typography>

                                        </Box>

                                    )
                                )

                            }

                        </Box>

                        <Typography
                            sx={{
                                mt: 2,
                                textAlign: "center",
                                color: "#64748B"
                            }}
                        >

                            Employee distribution across countries

                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default DashboardCharts;