import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Article } from 'src/app/models/article/article';
import { ArticleService } from 'src/app/services/article.services';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [ArticleService]
})
export class EditArticleComponent implements OnInit {

  public article: Article;
  public url: string;
  public status: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.url = Global.url;
  }
  
  // afuConfig of package angular-file-uploader
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png .gif .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-image',
      method: "POST",
      params: {
        'page': '1'
      }
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Upload image of article...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit(): void {
    this._articleService.update(this.article._id, this.article).subscribe( // susbscribe() agarra el Observable
      (res) => {
        if (res.status == 'success') {
          this.status = 'success';
          this.article = res.article;

          //ALERT with sweetAlert
          swal(
            'Article edit',
            'Article edited with successfully',
            'success'
          );

          this._router.navigate(['/blog/article-detalle', this.article._id]);
          console.log(this.article);
        } else {
          this.status = 'error';
        }
      },
      (err) => {
        console.log(err);
        this.status = 'error';
      });
  }

  getArticle(): void {
    this._route.params.subscribe(params => {
      let id = params['id']; // agarro el parametro que me llega por la url

      return this._articleService.getArticle(id).subscribe(
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

  imageChange(data): void {
    this.article.image = data.body.image;
    console.log(data);
  }

}
