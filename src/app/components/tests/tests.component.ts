import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  public name: string;
  public lastname: string;

  constructor(
    private _route: ActivatedRoute, // hacer redirecciones a otras paginas y mas
    private _router: Router // sacar los parametros de la url
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
     this.name = params.name;
     this.lastname = params.lastname;
    });
  }

  redirect(): void {
   this._router.navigate(['/test-pag','Alejo','Taliento']);
  }
}
