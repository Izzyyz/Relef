import { Component, Inject, inject, OnInit } from '@angular/core';
import { PromComponent } from "../prom/prom.component";
import { FooterComponent } from "../footer/footer.component";
import { LogService } from "../../services/log.service";
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";
import { ProfileService } from "../../services/profile.service";
import { ReactiveFormsModule, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ProfileD } from "../../interfaces/profile-d";
import { Profile } from "../../interfaces/profile";
import { NavRComponent } from "../nav-r/nav-r.component";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavComponent, FooterComponent, PromComponent, RouterLink, ReactiveFormsModule,NavRComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
//Todo lo comentado es por Toast no sirve
export class ProfileComponent implements OnInit {
  crudservice = inject(ProfileService)
  logService = inject(LogService)
  toastService = inject(ToastrService)
  constructor(private profileService: ProfileService) {}
  fName: string = "";
  lName: string = ""; 
  emailS: string = "";
  address: string = "";
  pais: string = "";
  ciudad: string = "";
  phone: string = "";
  id: string = "";
  isLoading: boolean = false;
  public  allStore: any [] = [];

 getPerfil(){
  this.crudservice.getProfile().subscribe((respuesta:any)=>{console.log(respuesta)})
 }
 crudForm2 = new FormGroup({
  _id: new FormControl('', Validators.required),
});

 crudForm = new FormGroup({
  _id: new FormControl('', Validators.required),
  fName: new FormControl('', Validators.required),
  lName: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  cPassword: new FormControl('', Validators.required),
  address: new FormControl('', Validators.required),
  country: new FormControl('', Validators.required),
  city: new FormControl('', Validators.required),
  phoneNum: new FormControl('', Validators.required),
});
eventSubmit() {
  if (this.crudForm.valid) {
    const _id = this.crudForm.value._id;
    const fName = this.crudForm.value.fName;
    const lName = this.crudForm.value.lName;
    const email = this.crudForm.value.email;
    const password = this.crudForm.value.password;
    const cPassword = this.crudForm.value.cPassword;
    const address = this.crudForm.value.address;
    const country = this.crudForm.value.country;
    const city = this.crudForm.value.city;
    const phoneNum = this.crudForm.value.phoneNum;
    if (typeof email === 'string' && typeof password === 'string' && typeof cPassword === 'string' && typeof lName === 'string' && typeof fName === 'string'  && typeof address === 'string' && typeof city === 'string'  && typeof country === 'string' && typeof phoneNum === 'string' && typeof _id === 'string') {
      const crud: Profile = {
        _id,
        fName,
        lName,
        email,
        password,
        cPassword,
        address,
        country,
        city,
        phoneNum,
      };
      this.crudservice.updProfile(crud).subscribe((respuesta:any)=>{
        if (respuesta.resultado == "bien"){
          this.isLoading = true
          this.toastService.success("You're going to log out, log in again please")
          setTimeout(() => {
            this.logService.logout();
          }, 2000);
          
        } else{
          console.log("ayudapapadios");
        }
      })
    
    }
  }
} 
eventSubmit2() {
  if (this.crudForm2.valid) {
    const _id = this.crudForm2.value._id;
    if (typeof _id === 'string') {
      const crudD: ProfileD = {
        _id,
      };
      this.crudservice.delProfile(crudD).subscribe((respuesta:any)=>{
        if (respuesta.resultado == "bien"){
          this.isLoading = true
          this.toastService.success("You've deleted your account, sign up")
          setTimeout(() => {
            this.logService.logout();
          }, 2000);
          
        } else{
          console.log("ayudapapadios");
        }
      })
    
    }
  }
} 
ngOnInit(): void {
		const token: any = localStorage.getItem("token");
		if (token) {
			this.logService.validarToken(token).subscribe((respuesta: any) => {
				if (respuesta.resultado === "bien") {
					this.fName = respuesta.datos.fNombre;
          this.lName = respuesta.datos.lNombre;
          this.emailS = respuesta.datos.mail;
          this.address = respuesta.datos.direccion;
          this.pais = respuesta.datos.country;
          this.ciudad = respuesta.datos.city;
          this.phone = respuesta.datos.phone;
          this.id = respuesta.datos.id
					this.toastService.success(`Hi, ${this.fName} ${this.lName} enjoy our skin care store `);
				} else {
					this.logService.logout();
				}
			});
		} else {
			this.logService.logout2();
		}
		/* this.profileService.getProfile().subscribe(
			(res: any) => {
				this.profile = respuesta.datos;
			},
			(error) => {
				console.error("Error al obtener los datos:", error);
			}
		);
	} */

}
  }