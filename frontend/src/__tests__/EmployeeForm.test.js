import {render,screen,fireEvent } from "@testing-library/react";
import EmployeeForm from "../pages/Employees/EmployeeForm";

test("shows validation errors", () => {

    render(
        <EmployeeForm
            mode="add"
            onSubmit={jest.fn()}
        />
    );

    fireEvent.click(
        screen.getByText("Create Employee")
    );

    expect(
        screen.getByText(
            "Employee Code is required"
        )
    ).toBeInTheDocument();

});