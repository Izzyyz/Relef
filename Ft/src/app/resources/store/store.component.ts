import { Component, inject } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";
import { StoreService } from "../../services/store.service";
import { NavRComponent } from "../nav-r/nav-r.component";
import { PromComponent } from "../prom/prom.component";
import { FooterComponent } from "../footer/footer.component";
import {UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe,DecimalPipe,} from '@angular/common';
@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavComponent, RouterLink, NavRComponent, PromComponent, FooterComponent,UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe,DecimalPipe,],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  storeService = inject(StoreService)
  allStore: any [] = [];
  product: any[] = [];
  productSelected: any = null;
  getAllStore(){
    this.storeService.getData().subscribe((res: any)=>{
      if (res) {
        this.allStore = res.datos;
      } else {
        console.log("There was an error fetching the api");
      }
    })
  }

  

  handleInfo(product: any) {
    /*console.log('product: ', product);*/
    this.productSelected = { ...product,};
    /*console.log('capSelected: ', this.productSelected);*/
  }

  ngOnInit(){
    this.getAllStore()
  }
}