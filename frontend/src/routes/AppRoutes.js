import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Employees from "../pages/Employees/Employees";
import EmployeeDetails from "../pages/EmployeeDetails/EmployeeDetails";
import EditEmployee from "../pages/Employees/EditEmployee";
import AddEmployee from "../pages/Employees/AddEmployee";

function AppRoutes() {

    return (

        <Layout>

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/employees"
                    element={<Employees />}
                />
                <Route
                    path="/employees/:id"
                    element={<EmployeeDetails />}
                />
                <Route
                    path="/employees/edit/:id"
                    element={<EditEmployee />}
                />
                <Route
                    path="/employees/add"
                    element={<AddEmployee />}
                />

            </Routes>

        </Layout>

    );

}

export default AppRoutes;