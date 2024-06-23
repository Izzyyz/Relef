import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NavRComponent } from "../nav-r/nav-r.component";

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [RouterLink, NavRComponent],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {

}
