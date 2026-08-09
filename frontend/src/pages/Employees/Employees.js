import { useEffect, useState } from "react";

import {
    Typography,
    Box
} from "@mui/material";

import api from "../../services/axios";
import useDebounce from "../../hooks/useDebounce";

import EmployeeToolbar from "./EmployeeToolbar";
import EmployeeTable from "./EmployeeTable";

function Employees() {

    const [employees, setEmployees] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);

    const [search, setSearch] = useState("");

    const debouncedSearch =
        useDebounce(search, 500);

    const [country, setCountry] = useState("");
    const [department, setDepartment] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {

        fetchEmployees();

    }, [
        page,
        debouncedSearch,
        country,
        department,
        status
    ]);

    const fetchEmployees = async () => {

        setLoading(true);

        try {

            const response = await api.get(
                "/employees",
                {
                    params: {
                        page,
                        limit: 9,
                        search: debouncedSearch,
                        country,
                        department,
                        status
                    }
                }
            );

            setEmployees(response.data.data);

            setPagination(
                response.data.pagination
            );

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            <Box
                sx={{
                    mb: 1
                }}
            >

                <Typography
                    sx={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#0F172A"
                    }}
                >
                    Employees
                </Typography>

                <Typography
                    sx={{
                        color: "#64748B",
                        mt: 1
                    }}
                >
                    Manage employee records,
                    salaries and status.
                </Typography>

            </Box>

            <EmployeeToolbar
                search={search}
                setSearch={setSearch}
                country={country}
                setCountry={setCountry}
                department={department}
                setDepartment={setDepartment}
                status={status}
                setStatus={setStatus}
                totalRecords={
                    pagination.totalRecords
                }
            />

            <EmployeeTable
                rows={employees}
                loading={loading}
                pagination={pagination}
                page={page}
                setPage={setPage}
            />

        </>

    );

}

export default Employees;