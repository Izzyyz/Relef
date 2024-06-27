import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";
import { NavRComponent } from "../nav-r/nav-r.component";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-asc',
  standalone: true,
  imports: [NavComponent,RouterLink,NavRComponent, FooterComponent],
  templateUrl: './asc.component.html',
  styleUrl: './asc.component.css'
})
export class AscComponent {

}
