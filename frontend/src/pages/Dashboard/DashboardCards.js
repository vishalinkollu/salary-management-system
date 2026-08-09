import Grid from "@mui/material/Grid";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from "@mui/icons-material/Paid";
import PublicIcon from "@mui/icons-material/Public";
import BusinessIcon from "@mui/icons-material/Business";

import StatCard from "../../components/common/StatCard";

const formatNumber = (value) => {

    if (value >= 10000000) {
        return `${(value / 10000000).toFixed(1)} Cr`;
    }

    if (value >= 100000) {
        return `${(value / 100000).toFixed(1)} L`;
    }

    return Number(value).toLocaleString();
};

function DashboardCards({ dashboard }) {

    const cards = [
        {
            title: "Total Employees",
            value: Number(dashboard.totalEmployees).toLocaleString(),
            color: "#2563EB",
            icon: <PeopleIcon />
        },

        {
            title: "Countries",
            value: dashboard.countries,
            color: "#7C3AED",
            icon: <PublicIcon />
        },

        {
            title: "Departments",
            value: dashboard.departments,
            color: "#EA580C",
            icon: <BusinessIcon />
        },

        {
            title: "Average Salary",
            value: formatNumber(dashboard.averageSalary),
            color: "#0891B2",
            icon: <PaidIcon />
        },

        {
            title: "Total Payroll",
            value: formatNumber(dashboard.totalPayroll),
            color: "#059669",
            icon: <PaidIcon />
        }

    ];

    return (

        <Grid
            container
            spacing={3}
            justifyContent="center"
        >

            {

                cards.map((card) => (

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        key={card.title}
                        sx={{
                            flex: 1,
                            minWidth: 220
                        }}
                    >
                        <StatCard {...card} />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default DashboardCards;