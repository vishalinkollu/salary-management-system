import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import BackButton from "../../components/common/BackButton";
import api from "../../services/axios";

function EditEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        try {
            const response = await api.get(`/employees/${id}`);
            setEmployee(response.data.data);
        }
        catch (error) {
            alert("Unable to load employee.");
        }
    };

    const handleSubmit = async (formData) => {
        try {
            await api.put(`/employees/${id}`, formData);
            alert("Employee updated successfully.");
            navigate("/employees");
        }
        catch (error) {
            alert(
                error.response?.data?.message ||
                "Unable to update employee."
            );
        }
    };

    if (!employee) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <BackButton />
            <EmployeeForm
                mode="edit"
                initialValues={employee}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditEmployee;