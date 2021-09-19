import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() name: string; // pasar datos de un componente padre a un componente hijo @Input
  @Input() size: string;

  constructor() { }

  ngOnInit(): void {
  }

}
