import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";
import { NavRComponent } from "../nav-r/nav-r.component"

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [NavComponent, RouterLink,NavRComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

}
