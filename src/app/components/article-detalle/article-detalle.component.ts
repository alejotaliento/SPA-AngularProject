import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ArticleService } from 'src/app/services/article.services';
import { Article } from 'src/app/models/article/article';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-detalle',
  templateUrl: './article-detalle.component.html',
  styleUrls: ['./article-detalle.component.css'],
  providers: [ArticleService] //servicio cargado
})
export class ArticleDetalleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService, // servicio cargardo
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id']; // agarro el parametro que me llega por la url

      this._articleService.getArticle(id).subscribe(
        (res) => {
          if (res.article) {
            this.article = res.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        (err) => {
          console.log(err);
          this._router.navigate(['/home']);
        }
      )
    });
  }

  deleteArticle(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this article!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          (res) => {
            this._router.navigate(['/blog']);
          },
          (err) => {
            console.log(err);
          }
        );
        swal("Article deleted successfully", {
          icon: "success",
        });
      } else {
        swal("Your article is safe!");
      }
    });
  }

}
