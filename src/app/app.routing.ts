// importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router, Route } from '@angular/router';

// importar componentes a los cuales les quiero hacer una pagina excusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsComponent } from './components/forms/forms.component';
import { moviesComponent } from './components/movies/movies.component';
import { ErrorComponent } from './components/error/error.component';
import { TestsComponent } from './components/tests/tests.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ArticleDetalleComponent } from './components/article-detalle/article-detalle.component';
import { SearchComponent } from './components/search/search.component';


// Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // Cuando use esta url cargara el componente seleccionado
    { path: 'home', component: HomeComponent },
    { path: 'SPA-AngularProject', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/article-create', component: CreateArticleComponent },
    { path: 'blog/article-edit/:id', component: EditArticleComponent },
    { path: 'blog/article-detalle/:id', component: ArticleDetalleComponent },
    { path: 'search-article/:search', component: SearchComponent },
    { path: 'form', component: FormsComponent },
    { path: 'movies', component: moviesComponent },
    { path: 'test-pag', component: TestsComponent },
    { path: 'test-pag/:name/:lastname', component: TestsComponent }, // pagina con parametro opcional
    { path: '**', component: ErrorComponent } // ** = si la ruta no existe
];

// exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);

