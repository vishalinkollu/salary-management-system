import { useNavigate } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import api from "../../services/axios";
import BackButton from "../../components/common/BackButton";

function AddEmployee() {

    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        try {
            await api.post("/employees", formData);
            alert("Employee added successfully.");
            navigate("/employees");
        }
        catch (error) {
            alert(
                error.response?.data?.message ||
                "Unable to create employee."
            );
        }
    };

    return (
        <>
            <BackButton />

            <EmployeeForm
                mode="add"
                onSubmit={handleSubmit}
            />
        </>
    );

}

export default AddEmployee;