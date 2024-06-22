import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [NavComponent, RouterLink],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

}
