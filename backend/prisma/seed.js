const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

const countries = [
    {
        name: "India",
        currencyCode: "INR",
        currencySymbol: "₹",
        exchangeRate: 1
    },
    {
        name: "United States",
        currencyCode: "USD",
        currencySymbol: "$",
        exchangeRate: 95.27
    },
    {
        name: "Canada",
        currencyCode: "CAD",
        currencySymbol: "C$",
        exchangeRate: 67.93
    }
];

const departments = [
    {
        name: "Engineering"
    },
    {
        name: "Sales"
    },
    {
        name: "Marketing"
    },
    {
        name: "Finance"
    },
    {
        name: "Human Resources"
    }
];

const countryDistribution = [
    {
        name: "India",
        percentage: 60
    },
    {
        name: "United States",
        percentage: 25
    },
    {
        name: "Canada",
        percentage: 15
    }
];

function generateSalary(countryName) {

    switch (countryName) {

        case "India":
            return faker.number.int({
                min: 300000,
                max: 3000000
            });

        case "United States":
            return faker.number.int({
                min: 50000,
                max: 200000
            });

        case "Canada":
            return faker.number.int({
                min: 45000,
                max: 180000
            });

        default:
            return 50000;
    }

}

function getRandomCountry(countries) {

    const random = Math.random();

    if (random < 0.60) {

        return countries.find(c => c.name === "India");

    }

    if (random < 0.85) {

        return countries.find(c => c.name === "United States");

    }

    return countries.find(c => c.name === "Canada");

}

function getRandomDepartment(departments) {

    return departments[
        faker.number.int({
            min: 0,
            max: departments.length - 1
        })
    ];

}

async function seedEmployees(countries, departments) {

    console.log("Generating employees...");

    const employees = [];

    for (let i = 1; i <= 10000; i++) {

        const country = getRandomCountry(countries);

        const department = getRandomDepartment(departments);

        const salary = generateSalary(country.name);

        employees.push({

            employeeCode: `EMP${String(i).padStart(5, "0")}`,

            firstName: faker.person.firstName(),

            lastName: faker.person.lastName(),

            email: `employee${i}@acme.com`,

            phone: faker.phone.number(),

            gender: faker.helpers.arrayElement([
                "MALE",
                "FEMALE",
                "OTHER"
            ]),

            joiningDate: faker.date.between({
                from: "2018-01-01",
                to: new Date()
            }),

            currentSalary: salary,

            status: "ACTIVE",

            countryId: country.id,

            departmentId: department.id

        });

    }

    console.log("Employees generated");

    console.log("Saving employees...");

    await prisma.employee.createMany({

        data: employees

    });

    console.log("Employees inserted");

    await seedSalaryHistory();

}

async function seedSalaryHistory() {

    console.log("Generating salary history...");

    const employees = await prisma.employee.findMany({
        include: {
            country: true
        }
    });

    const salaryHistory = employees.map(employee => ({

        employeeId: employee.id,

        salary: employee.currentSalary,

        currency: employee.country.currencyCode,

        effectiveFrom: employee.joiningDate ?? new Date(),

        remarks: "Initial Salary"

    }));

    await prisma.salaryHistory.createMany({

        data: salaryHistory

    });

    console.log("Salary history inserted");

}

async function main() {
    console.log("🌱 Starting database seeding...");

    await prisma.salaryHistory.deleteMany();
    await prisma.employee.deleteMany();
    await prisma.department.deleteMany();
    await prisma.country.deleteMany();

    console.log("🗑️ Existing data cleared");

    await prisma.country.createMany({
        data: countries,
    });

    await prisma.department.createMany({
        data: departments,
    });

    console.log("✅ Countries and Departments created");

    const dbCountries = await prisma.country.findMany();

    const dbDepartments = await prisma.department.findMany();

    await seedEmployees(dbCountries, dbDepartments);

    console.log("🎉 Database seeded successfully");
}


main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });