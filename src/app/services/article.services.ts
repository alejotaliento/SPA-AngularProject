import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // imports para acceder al Backend
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class ArticleService {

    public url: string;

    constructor(
        private _http: HttpClient,
    ) {
        this.url = Global.url;
    }

    //Test method
    test(): string {
        return "Hello wolrld from Article Service.";
    }

    getArticles(last: any = null): Observable<any> {

        let articles = 'articles';

        if (last != null) {
            articles = 'articles/true';
        }

        return this._http.get(this.url + articles); // llamada ajax por el metodo get para sacar datos del Backend
    }

    getArticle(articleId: string): Observable<any> {
        return this._http.get(this.url + 'article/' + articleId); // llamada ajax por el metodo get para sacar datos del Backend
    }

    search(searchString): Observable<any> {
        return this._http.get(this.url + 'search-article/' + searchString); // llamada ajax por el metodo get para sacar datos del Backend
    }

    createArticle(article): Observable<any> {
        let params = JSON.stringify(article); // Convierto el objeto liteal de js en un Json-String para pasarlo al Backend
        let headers = new HttpHeaders().set('Content-Type', 'application/json'); // Config de cabeceras | Manera en que recibiremos los datos en el Backend (en este caso un Content-Type de tipo json porque estamos usando nodeJS)

        return this._http.post(this.url + 'save', params, { headers: headers }); // peticion ajax para enviar el objeto y guardarlo en el Backend 
    }

    update(id, article): Observable<any> {
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'article/' + id, params, { headers: headers });
    }

    delete(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + '/article/' + id, {headers: headers});
    }
}