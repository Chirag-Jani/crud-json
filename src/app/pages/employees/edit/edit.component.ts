import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: number | undefined;
  header: string = '';
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.header = this.id === 0 ? 'Add an Employee' : 'Edit Employee Details';

    // if (this.id != 0) {
    //   this.employee = this.employeeService.onGetEmployee(this.id);
    // }
  }

  onSubmit(form: NgForm) {
    let employee: Employee = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
    };

    if (this.id === 0) {
      this.employeeService.onAdd(employee);
    }
    // else {
    //   this.employeeService.onUpdate(employee);
    // }

    this.router.navigateByUrl('');
  }
}
