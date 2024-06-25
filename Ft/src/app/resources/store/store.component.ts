import { Component, inject } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";
import { StoreService } from "../../services/store.service";
import { NavRComponent } from "../nav-r/nav-r.component";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavComponent, RouterLink, NavRComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  storeService = inject(StoreService)
  allStore: any [] = [];
  getAllStore(){
    this.storeService.getData().subscribe((res: any)=>{
      if (res) {
        this.allStore = res;
      } else {
        console.log("There was an error fetching the api");
      }
    })
  }
  ngOnInit(){
    this.getAllStore()
  }
}