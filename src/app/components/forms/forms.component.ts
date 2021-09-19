import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.user = {
      name: '',
      lastname: '',
      email: '',
      genero: ''
    };
  }

  onSubmit(): void {
    console.log(this.user);
  }

  // Evento (click)
  youAreHaveClicked(): void {
    alert('Has dado click breo');
  }
  
  // Evento (blur)
  youExit(): void {
    alert('Has salido breo');
  }

  // Evento (keyup.keyboardLetter)
  youPressShift(): void {
    alert('Has presionado Shift');
  }
}
