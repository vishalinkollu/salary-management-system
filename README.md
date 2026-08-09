# Employee Salary Management System

A full-stack Employee Salary Management application built for ACME Organization's HR team to manage salary data for 10,000 employees across multiple countries.

---

## Live Demo

### Frontend
https://salary-management-system-lovat.vercel.app/

### Backend API
https://salary-management-backend-ujai.onrender.com/api/v1

---

## Problem Statement

ACME Organization currently manages salary information for over 10,000 employees using spreadsheets.

This process is:

- Time consuming
- Error prone
- Difficult to search and analyze
- Hard to maintain across countries and departments

The goal of this project is to provide a centralized web-based Employee Salary Management System that allows HR Managers to:

- Manage employee records
- Maintain salary information
- Search employees efficiently
- Filter employees by country, department, and status
- View employee salary history
- Analyze employee salary distribution

---

# User Persona

HR Manager

The HR Manager needs a fast and scalable solution to manage employee salary data across multiple countries.

---

# Features

## Employee Management

- Create Employee
- Edit Employee
- Delete Employee
- View Employee Details

---

## Search & Filtering

Search employees by:

- Employee Code
- First Name
- Last Name
- Email

Filter employees by:

- Country
- Department
- Status

---

## Sorting

Sort employees by:

- Name
- Salary
- Joining Date

---

## Salary Management

Each employee contains:

- Current Salary
- Salary History
- Country Currency Information

---

## Dashboard Analytics

Displays:

- Total Employees
- Active Employees
- Employees by Country
- Employees by Department
- Salary Distribution

---

## Pagination

Server-side pagination implemented for handling 10,000 employee records efficiently.

---

# Tech Stack

## Frontend

- React.js
- Material UI
- React Router
- Axios
- Recharts

---

## Backend

- Node.js
- Express.js
- Prisma ORM
- SQLite

---

## Testing

### Frontend

- React Testing Library
- Jest

### Backend

- Jest
- Supertest

---

# Project Structure

## Frontend

```text
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── routes/
│   ├── layouts/
│   └── __tests__/
│
└── package.json
```

## Backend

```text
backend/
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
│
├── src/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── routes/
│   ├── middlewares/
│   └── config/
│
├── tests/
│
└── package.json
```

---

# Database Design

## Country

| Field | Type |
|---------|---------|
| id | Integer |
| name | String |
| currencyCode | String |
| currencySymbol | String |
| exchangeRate | Float |

---

## Department

| Field | Type |
|---------|---------|
| id | Integer |
| name | String |

---

## Employee

| Field | Type |
|---------|---------|
| id | Integer |
| employeeCode | String |
| firstName | String |
| lastName | String |
| email | String |
| phone | String |
| gender | Enum |
| joiningDate | Date |
| currentSalary | Float |
| status | Enum |
| countryId | Integer |
| departmentId | Integer |

---

## SalaryHistory

| Field | Type |
|---------|---------|
| id | Integer |
| employeeId | Integer |
| salary | Float |
| currency | String |
| effectiveFrom | Date |
| remarks | String |

--- 

# Database Seeding

The application includes a seed script that generates:

- 10,000 Employees
- Multiple Countries
- Multiple Departments
- Salary History Records

Run:

```bash
npm run seed
```

---

# Running Locally

## Backend

```bash
cd backend

npm install

npx prisma generate

npx prisma migrate deploy

npm run seed

npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Running Tests

## Backend

```bash
npm run test
```

Tests cover:

- Service Layer
- Controller Layer
- API Endpoints

---

## Frontend

```bash
npm run test
```

Tests cover:

- Employee Form Validation
- Employee Components
- Employee Screens

---

# Deployment

## Backend

Hosted on Render

```text
https://salary-management-backend-ujai.onrender.com/api/v1
```

---

## Frontend

Hosted on Vercel

```text
https://salary-management-system-lovat.vercel.app/
```

---

# AI Assisted Development

AI tools were intentionally used during development to:

- Generate boilerplate code
- Explore architecture options
- Generate test cases
- Improve code quality
- Assist in documentation

All generated code was reviewed, modified, validated, and tested before inclusion.

---

# Trade-Offs & Design Decisions

## Why SQLite?

Chosen because:

- Lightweight
- No infrastructure setup required
- Ideal for assessment environment
- Prisma support

---

## Why Repository-Service Pattern?

Provides:

- Better separation of concerns
- Easier testing
- Improved maintainability

---

## Why Server-Side Pagination?

Required for handling 10,000 employee records efficiently.

---

# Future Improvements

- Authentication & Authorization
- Role Based Access Control
- Salary Revision Workflow
- Audit Logs
- CSV Import/Export
- Multi-Currency Reporting
- Advanced Analytics Dashboard
- Real-time Notifications

---

# Author

Vishal Inkollu

Built as part of the Employee Salary Management Assessment.