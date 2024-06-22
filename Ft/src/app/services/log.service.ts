import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ifc } from "../interfaces/ifc";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  httpClient = inject(HttpClient);

  log(Ifc:Ifc){
    return this.httpClient.post("http://localhost:2444/register", Ifc)
  }
}
