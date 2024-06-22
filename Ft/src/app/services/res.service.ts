import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ifsr } from "../interfaces/ifsr";

@Injectable({
  providedIn: 'root'
})
export class ResService {

  constructor() { }
  httpClient = inject(HttpClient);

  res(Ifsr:Ifsr){
    return this.httpClient.post("http://localhost:2444/register", Ifsr)
}}
