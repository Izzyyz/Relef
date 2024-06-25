import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";
import { NavRComponent } from "../nav-r/nav-r.component";


@Component({
  selector: 'app-asc',
  standalone: true,
  imports: [NavComponent,RouterLink,NavRComponent],
  templateUrl: './asc.component.html',
  styleUrl: './asc.component.css'
})
export class AscComponent {

}
