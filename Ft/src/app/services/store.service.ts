import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
    constructor() { }
    API_URL: string = "http://localhost:2444/products"

    httpClient = inject(HttpClient)

    getData(){
      return this.httpClient.get(this.API_URL)
    }}