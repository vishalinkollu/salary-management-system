import { Stack, Tooltip, IconButton } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useNavigate } from "react-router-dom";
import api from "../../services/axios";

function EmployeeActions({ row }) {

    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/employees/${row.id}`);
    };

    const handleEdit = () => {
        navigate(`/employees/edit/${row.id}`);
    };

    const handleDelete = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) return;

        try {

            await api.delete(`/employees/${row.id}`);

            alert("Employee deleted successfully.");

            window.location.reload();

        } catch {

            alert("Unable to delete employee.");

        }
    };

    return (

        <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
                width: "100%",
                mt: 3
            }}
        >

            <Tooltip title="View Employee">

                <IconButton
                    onClick={handleView}
                    sx={{
                        width: 44,
                        height: 44,
                        backgroundColor: "#F3F0FF",
                        color: "#6D28D9",

                        "&:hover": {
                            backgroundColor: "#E9D5FF"
                        }
                    }}
                >
                    <VisibilityIcon fontSize="small" />
                </IconButton>

            </Tooltip>

            <Tooltip title="Edit Employee">

                <IconButton
                    onClick={handleEdit}
                    sx={{
                        width: 44,
                        height: 44,
                        backgroundColor: "#FFF7ED",
                        color: "#EA580C",

                        "&:hover": {
                            backgroundColor: "#FED7AA"
                        }
                    }}
                >
                    <EditIcon fontSize="small" />
                </IconButton>

            </Tooltip>

            <Tooltip title="Delete Employee">

                <IconButton
                    onClick={handleDelete}
                    sx={{
                        width: 44,
                        height: 44,
                        backgroundColor: "#FDF2F8",
                        color: "#EC4899",

                        "&:hover": {
                            backgroundColor: "#FBCFE8"
                        }
                    }}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>

            </Tooltip>

        </Stack>

    );
}

export default EmployeeActions;