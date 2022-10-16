class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (!this.departments[department]) {
            this.departments[department] = {
                sumSal: 0,
                avgSal: 0,
                employee: []
            }
        }

        this.departments[department].employee.push({ name, salary, position });
        this.newSalary(this.departments[department], salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    newSalary(department, salary) {
        department.sumSal += Number(salary);
        department.avgSal = department.sumSal / department.employee.length;
    }
    bestDepartment() {
        let bestDep = Object.entries(this.departments)
            .sort(([name1, info1], [name2, info2]) => {
                return info2.avgSal - info1.avgSal;
            })[0];

        let empl = bestDep[1].employee
            .sort((a, b) => {
                return b.salary - a.salary || a.name.localeCompare(b.name)
            });

        let output = [];
        output.push(`Best Department is: ${bestDep[0]}`);
        output.push(`Average salary: ${bestDep[1].avgSal.toFixed(2)}`);

        for (const person of empl) {
            output.push(`${person.name} ${person.salary} ${person.position}`);
        }

        return output.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
