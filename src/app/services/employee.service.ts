import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Chirag',
      email: 'emailone@gmail.com',
      phone: 111,
    },
    {
      id: 2,
      name: 'Jani',
      email: 'emailtwo@gmail.com',
      phone: 222,
    },
  ];

  constructor() {}

  onGet() {
    return this.employees;
  }

  onAdd(employee: Employee) {
    this.employees.push(employee);
  }

  // onDelete(id: Number) {
  //   let employee = this.employees.find((x) => x.id === id);
  //   let index = this.employees.indexOf(employee, 0);
  //   this.employees.splice(index, 1);
  // }
}
