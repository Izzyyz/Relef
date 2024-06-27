import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Ifsr } from "../../interfaces/ifsr";
import { ReactiveFormsModule, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ResService } from "../../services/res.service";
import { NavRComponent } from "../nav-r/nav-r.component";
import { NavComponent } from "../nav/nav.component";
import { ToastrService } from "ngx-toastr";
import { LogService } from "../../services/log.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-res',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,NavRComponent,NavComponent],
  templateUrl: './res.component.html',
  styleUrl: './res.component.css'
})
export class ResComponent {
  router = inject(Router)
  logService = inject(LogService)
  toastrService = inject(ToastrService)
  resservice = inject(ResService)
  IfsrForm = new FormGroup({
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cPassword: new FormControl('', Validators.required),
  });

  eventSubmit() {
    if (this.IfsrForm.valid) {
      const fName = this.IfsrForm.value.fName;
      const lName = this.IfsrForm.value.lName;
      const email = this.IfsrForm.value.email;
      const password = this.IfsrForm.value.password;
      const cPassword = this.IfsrForm.value.cPassword;

      if (typeof email === 'string' && typeof password === 'string' && typeof cPassword === 'string' && typeof lName === 'string' && typeof fName === 'string') {
        const Ifsr: Ifsr = {
          fName,
          lName,
          email,
          password,
          cPassword,
        };
        this.resservice.res(Ifsr).subscribe((respuesta:any)=>{
          if(respuesta.resultado === "bien"){
            this.toastrService.success("Register Success!, Sign In")
            setTimeout(() => {
              const redirectUrl = this.logService.redirectUrl ? this.logService.redirectUrl: "/login"
            this.logService.redirectUrl = null;
            this.router.navigateByUrl(redirectUrl)
            }, 2000);
          } else if (respuesta.resultado === "mal2") {
            this.toastrService.warning("The password and confirm password must be the same")
          } else{
            this.toastrService.warning("There's already an account created with this email")
          }
        })
        
        
    } else {
      this.toastrService.warning("You must complete all the fields")
    }
      }
    }
  }