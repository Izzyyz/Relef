import { Component } from '@angular/core';
import { Ifc } from "../../interfaces/ifc";
import { ReactiveFormsModule, FormControl, FormGroup, Validators, } from '@angular/forms';


@Component({
  selector: 'app-log',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  IfcForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  eventSubmit() {
    if (this.IfcForm.valid) {
      const email = this.IfcForm.value.email;
      const password = this.IfcForm.value.password;

      if (typeof email === 'string' && typeof password === 'string') {
        const Ifc: Ifc = {
          email,
          password,
        };
        console.log("Info", Ifc)
    } else {
      console.log("L");
    }
  }
}}
