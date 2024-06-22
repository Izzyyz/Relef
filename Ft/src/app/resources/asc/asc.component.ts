import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-asc',
  standalone: true,
  imports: [NavComponent,RouterLink],
  templateUrl: './asc.component.html',
  styleUrl: './asc.component.css'
})
export class AscComponent {

}
