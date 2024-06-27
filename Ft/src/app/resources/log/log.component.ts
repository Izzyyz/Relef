import { Component, inject } from '@angular/core';
import { Ifc } from "../../interfaces/ifc";
import { ReactiveFormsModule, FormControl, FormGroup, Validators, } from '@angular/forms';
import { LogService } from "../../services/log.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";
import { NavRComponent } from "../nav-r/nav-r.component";
/* import { ToastrService } from "ngx-toastr"; */
import { Router } from "@angular/router";

const jwtHelperService= new JwtHelperService();

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [ReactiveFormsModule,NavComponent,RouterLink,NavRComponent],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  router = inject(Router);
 /*  toastrService = inject(ToastrService); */
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
        this.loginService.log(Ifc).subscribe((respuesta:any)=>{
          if (respuesta.resultado === "bien"){
            localStorage.setItem("token", respuesta.datos)
            const redirectUrl = this.loginService.redirectUrl ? this.loginService.redirectUrl: "/store"
            this.loginService.redirectUrl = null;
            this.router.navigateByUrl(redirectUrl)
          } else {
            /* this.toastrService.warning("Invalid token") */
            console.log("invalid token");
          }
        });
         
      
        
    } else {
     /*  this.toastrService.error("You must fill all fields"); */
     console.log("You must fill all fields");
    }
  }
}}