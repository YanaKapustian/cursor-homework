export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

export function getMyTaxes(salary) {
    return Number((this.tax * salary).toFixed(2));
}


function getMiddleTaxes() {
    return Number((this.tax * this.middleSalary).toFixed(2));
}

function getTotalTaxes() {
    return Number((this.tax * this.middleSalary * this.vacancies).toFixed(2));
}

function getMySalary() {
    setInterval(() => {
        const salary = Math.round(Math.random() * 500 + 1500);
        const taxes = getMyTaxes.call(this, salary);
        const obj = {
            salary: salary,
            taxes: taxes,
            profit: salary - taxes
        }
        console.log(obj);
    }, 10000)
}