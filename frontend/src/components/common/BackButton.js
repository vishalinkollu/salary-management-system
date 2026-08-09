import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function BackButton() {

    const navigate = useNavigate();

    return (
        <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 3 }}
            onClick={() => navigate("/employees")}
        >
            Back to Employees
        </Button>
    );

}

export default BackButton;