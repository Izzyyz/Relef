import { Injectable, inject, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LogService } from "../services/log.service";
import { Profile } from "../interfaces/profile";
import { ProfileD } from "../interfaces/profile-d";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  logService = inject(LogService)

constructor(private httpClient: HttpClient) {} 

tokenR: any [] = [];
id7: string = "";
id: String = "";
API_URL_Profile: string = "http://localhost:2444/users"
API_URL_ID: string = "http://localhost:2444/log-in"

/* token = this.logService.validarToken().subscribe() */

 getTokenId(token: any){
  this.httpClient.get(`${this.API_URL_ID}/${token}`)
  if(token.respuesta.resultado === "bien"){
    this.id = token.respuesta.datos.id
  }
} 

ngOnInit(): void {
  const token: any = localStorage.getItem("token");
  this.logService.validarToken(token).subscribe((respuesta: any) => {
    if (respuesta.resultado === "bien") {
      this.id7 = respuesta.datos.id;
      /* this.toastrService.success(`Hi, ${this.fName} ${this.lName} enjoy our skin care store `); */
    } else {
      this.logService.logout();
    }
  });
}


getProfile(){
  return this.httpClient.get(`${this.API_URL_Profile}/${this.id7}`)
}
updProfile(crud: Profile){
  return this.httpClient.put(`${this.API_URL_Profile}/${crud._id}`, crud )
}
delProfile(crudD: ProfileD){
  return this.httpClient.delete(`${this.API_URL_Profile}/${crudD._id}`)
}
}





/* 
getProfile(){
  return this.httpClient.get(`${this.API_URL_Profile}/ ${this.tokenR.respuesta.datos.id}`)
}}

 */