import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { moviesComponent } from './components/movies/movies.component';
import { TestsComponent } from './components/tests/tests.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsComponent } from './components/forms/forms.component';
import { ErrorComponent } from './components/error/error.component';
import { MovieComponent } from './components/movie/movie.component';
import { EsParPipe }  from './pipes/espar.pipe';
import { ArticlesComponent } from './components/articles/articles.component';
import { MomentModule } from 'ngx-moment';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ArticleDetalleComponent } from './components/article-detalle/article-detalle.component';
import { SearchComponent } from './components/search/search.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    moviesComponent,
    TestsComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormsComponent,
    ErrorComponent,
    MovieComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleDetalleComponent,
    SearchComponent,
    CreateArticleComponent,
    EditArticleComponent
  ],
  imports: [ //Modulos a cargar
    BrowserModule,
    routing,
    MomentModule, // Modulo con pipes para manejar datos tipo date
    AngularFileUploaderModule, // Modulo para manejar subida de archivos
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders], // Servicios a cargar
  bootstrap: [AppComponent]
})
export class AppModule { }
