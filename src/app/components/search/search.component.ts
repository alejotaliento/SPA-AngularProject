import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article/article';
import { ArticleService } from '../../services/article.services';
import { of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  //Props
  public articles: Article[];
  public search: string;

  constructor(
    private _articleService: ArticleService, // servicio article cargado
    private _route: ActivatedRoute,  // servicio route cargado
    private _router: Router  // servicio router cargado
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let search = params['search']; //agarro el parametros search de la url
      this.search = search;

      this._articleService.search(search).subscribe(
        (res) => {
          if(res.articles){
            this.articles = res.articles;
          }
          console.log(this.articles);
        },
        (err) => {
         this.articles = [];
        }
      )
    });
  }

}
