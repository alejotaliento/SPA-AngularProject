import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article/article';
import { Global } from '../../services/global';
import { ArticleService } from 'src/app/services/article.services';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService] //servicio article cargado
})
export class ArticlesComponent implements OnInit {

  public url: string;

  @Input() articles: Article[];

  constructor(
    private _articleService: ArticleService //servicio article cargado
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void { }



}
