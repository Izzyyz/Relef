import { Component, inject } from '@angular/core';
import { Ifc } from "../../interfaces/ifc";
import { ReactiveFormsModule, FormControl, FormGroup, Validators, } from '@angular/forms';
import { LogService } from "../../services/log.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";

const jwtHelperService= new JwtHelperService();

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [ReactiveFormsModule,NavComponent,RouterLink],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  loginService = inject(LogService);
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
        this.loginService.log(Ifc).subscribe((response:any)=>{console.log(response)})
        console.log("Info", Ifc)
    } else {
      console.log("L");
    }
  }
}}
