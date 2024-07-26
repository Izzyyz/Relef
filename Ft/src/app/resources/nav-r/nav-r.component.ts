import { Component, ElementRef, inject, ViewChild, Renderer2, OnInit } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { LogService } from "../../services/log.service";

@Component({
  selector: 'app-nav-r',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-r.component.html',
  styleUrl: './nav-r.component.css'
})
export class NavRComponent{
  router = inject(Router);
 logService = inject(LogService)} 