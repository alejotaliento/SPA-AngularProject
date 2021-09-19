import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output() markFavorite = new EventEmitter();  // @OutPut() pasar datos de un component hijo a un componente padre

  constructor() { }

  ngOnInit(): void {
  }

  //Method OUTPUT
  selectFavMovie(event, movie): void {
    this.markFavorite.emit({
      movie: movie
    });
  }

}
