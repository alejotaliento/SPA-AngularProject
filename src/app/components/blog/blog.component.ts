import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.services';
import { Article } from '../../models/article/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    console.log(this._articleService.test());

    this._articleService.getArticles().subscribe(
      (res) =>{
        if(res.articles){
          this.articles = res.articles;
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
