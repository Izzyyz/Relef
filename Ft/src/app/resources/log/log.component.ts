import { Component } from '@angular/core';
import { Ifc } from "../../interfaces/ifc";
import {ReactiveFormsModule,FormControl,FormGroup,Validators,} from '@angular/forms';


@Component({
  selector: 'app-log',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  IfcForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  eventSubmit(){
    console.log(this.IfcForm)
  }
}
