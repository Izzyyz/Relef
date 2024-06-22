import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Ifsr } from "../../interfaces/ifsr";
import { ReactiveFormsModule, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ResService } from "../../services/res.service";
import { NavRComponent } from "../nav-r/nav-r.component";

@Component({
  selector: 'app-res',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,NavRComponent],
  templateUrl: './res.component.html',
  styleUrl: './res.component.css'
})
export class ResComponent {
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
        this.resservice.res(Ifsr).subscribe((response:any)=>{console.log(response)})
        console.log("Info", Ifsr)
    } else {
      console.log("L");
    }
      }
    }
  }

