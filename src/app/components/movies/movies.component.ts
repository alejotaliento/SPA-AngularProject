import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie/movie'
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class moviesComponent implements OnInit, DoCheck {

  public tittle: string;
  public movies: Movie[];
  public favorite: Movie;

  constructor(
    private _movieService: MovieService
  ) {
    this.tittle = "Movie Component";
    this.movies = this._movieService.getMovies();
  }

  ngOnInit(): void {
    console.log("Componente iniciado");
    console.log(this.movies);
    console.log(this._movieService.helloMundo);
  }

  ngDoCheck(): void {
    console.log("DoCheck lanzado");
  }

  // HOOKES = method
  changeTittle(): void {
    this.tittle = "Tittle change";
  }

  showFavMovie(event): void {
    this.favorite = event.movie;
  }

  ngOnDestroy(): void {
    console.log("He component is going delete")
  }

}
