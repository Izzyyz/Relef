import { Component, inject, OnInit } from '@angular/core';
import { PromComponent } from "../prom/prom.component";
import { FooterComponent } from "../footer/footer.component";
import { LogService } from "../../services/log.service";
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";
import { ProfileService } from "../../services/profile.service";
import { ReactiveFormsModule, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Profile } from "../../interfaces/profile";
import { NavRComponent } from "../nav-r/nav-r.component";

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
  constructor(private profileService: ProfileService) {}
  fName: string = "";
  lName: string = ""; 
  emailS: string = "";
  address: string = "";
  id: string = "";
  public  allStore: any [] = [];

 getPerfil(){
  this.crudservice.getProfile().subscribe((respuesta:any)=>{console.log(respuesta)})
 }



 



 crudForm = new FormGroup({
  _id: new FormControl('', Validators.required),
  fName: new FormControl('', Validators.required),
  lName: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  cPassword: new FormControl('', Validators.required),
  address: new FormControl('', Validators.required),
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
    if (typeof email === 'string' && typeof password === 'string' && typeof cPassword === 'string' && typeof lName === 'string' && typeof fName === 'string'  && typeof address === 'string' &&  typeof _id === 'string') {
      const crud: Profile = {
        _id,
        fName,
        lName,
        email,
        password,
        cPassword,
        address,
      };
      this.crudservice.updProfile(crud).subscribe((respuesta:any)=>{
        if (respuesta.resultado == "bien"){
          console.log("lets gooo"); 
          this.logService.logout();
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
          this.id = respuesta.datos.id
					/* this.toastrService.success(`Hi, ${this.fName} ${this.lName} enjoy our skin care store `); */
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