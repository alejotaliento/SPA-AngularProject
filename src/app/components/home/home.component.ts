import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.services';
import { Article } from '../../models/article/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  //Props
  public title: string;
  public articles: Article[];

  constructor(
    private _articleService: ArticleService
  ) { 
    this.title = "Last articles"
  }

  ngOnInit(): void {
    // Last articles
    this._articleService.getArticles(true).subscribe(
      (res) =>{
        if(res.articles){
          this.articles = res.articles;
          console.log(this.articles);
        }else {
          //nothing
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
