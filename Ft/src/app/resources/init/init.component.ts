import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { RouterLink } from "@angular/router";
import { NavRComponent } from "../nav-r/nav-r.component"
import { PromComponent } from "../prom/prom.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [NavComponent, RouterLink,NavRComponent,PromComponent,FooterComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

}
