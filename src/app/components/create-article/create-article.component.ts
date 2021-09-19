import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article/article';
import { ArticleService } from 'src/app/services/article.services';
import { Global } from 'src/app/services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
  providers: [ArticleService] // servicio article cargado
})
export class CreateArticleComponent implements OnInit {

  public article: Article;
  public status: string;


  // afuConfig of package angular-file-uploader
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png .gif .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-image',// + this.article._id,
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

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService // servicio article cargado
  ) {
    this.article = new Article('', '', '', null, null);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this._articleService.createArticle(this.article).subscribe( // susbscribe() agarra el Observable
      (res) => {
        if (res.status == 'success') {
          this.status = 'success';
          this.article = res.article;

          //ALERT with sweetAlert
          swal(
            'Article create',
            'Article created with successfully',
            'success'
          );

          this._router.navigate(['/blog']);
          console.log(res.article);
        } else {
          this.status = 'error';
        }
      },
      (err) => {
        console.log(err);
        this.status = 'error';
      });
  }

  imageUpload(data) {
    this.article.image = data.body.image;
    console.log(this.article);
  }

}
