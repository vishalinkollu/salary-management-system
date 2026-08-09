import {
    Grid,
    Box,
    Paper,
    Pagination,
    Typography
} from "@mui/material";

import EmployeeCard from "./EmployeeCard";

function EmployeeTable({

    rows,
    pagination,
    page,
    setPage

}) {

    return (

        <Paper
            sx={{
                p: 2,
                borderRadius: "20px",
                border: "1px solid #E2E8F0",
                boxShadow:
                    "0 4px 18px rgba(15,23,42,0.06)"
            }}
        >

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(3, minmax(0, 1fr))",
                    gap: 2
                }}
            >
                {rows.map((employee) => (

                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                    />

                ))}
            </Box>

            <Box
                mt={4}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                gap={2}
            >

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    Showing {rows.length} of{" "}
                    {pagination.totalRecords || 0}
                    {" "}employees
                </Typography>

                <Pagination
                    page={page}
                    count={
                        pagination.totalPages || 1
                    }
                    onChange={(e, value) =>
                        setPage(value)
                    }
                    color="primary"
                />

            </Box>

        </Paper>

    );

}

export default EmployeeTable;