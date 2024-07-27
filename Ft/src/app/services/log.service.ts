import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Ifc } from "../interfaces/ifc";
import { ToastrService } from "ngx-toastr"; 

@Injectable({
  providedIn: 'root'
})
export class LogService {
  
  constructor() { }
  httpClient = inject(HttpClient);
  router = inject(Router);
toastrService = inject(ToastrService);
  
  API_URL = "http://3.140.246.165:3000/log-in";
redirectUrl: string | null = null;

  log(Ifc:Ifc){
    return this.httpClient.post(this.API_URL, Ifc)
  }
  validarToken(token: string) {
return this.httpClient.get(`${this.API_URL}/${token}`);
}
  isLog() {
  const token = localStorage.getItem("token");
  if (token) {
    
      return true;
    
    
  } else {
   
      return false;
  
  }
}
  logout() {
    this.toastrService.info("Thank you for using our services, see you later.!");
    setTimeout(() => {
      localStorage.removeItem("token");
      this.router.navigate(["/"]);
    }, 2000);
}
logout2(){
  this.toastrService.info("Thank you for using our services, see you later.!");
  setTimeout(() => {
    localStorage.removeItem("token");
  this.router.navigate(["/login"]);
  }, 2000);
 
}
}