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
    return this.httpClient.post("http://18.188.41.130:3000/register", Ifsr)
}}
