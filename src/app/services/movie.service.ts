import { Injectable } from '@angular/core';
import { Movie } from '../models/movie/movie';

// Aca en el servicio tengo mis datos y se los devuelvo a mi componente

@Injectable()
export class MovieService {

    public movies: Movie[];

    constructor() {

        this.movies = [
            // Objects
            new Movie("Batman", new Date(2020, 12, 10), 'https://image.shutterstock.com/image-photo/kiev-ukraine-april-16-2015-260nw-276697244.jpg'),
            new Movie("The incledibles", new Date(2014, 11, 10), "https://img.pngio.com/the-incredibles-logo-postcard-zazzlecom-the-incredibles-logo-540_540.jpg"),
            new Movie("Lion King", new Date(2020, 8, 5), "https://img.jakpost.net/c/2019/04/11/2019_04_11_69752_1554952087._large.jpg")
        ];
        // Object definition literally on documents Json
        // {year: 2020, title: "Batman", image: 'https://image.shutterstock.com/image-photo/kiev-ukraine-april-16-2015-260nw-276697244.jpg'},
        // {year: 2014, title: "The incledibles", image: 'https://img.pngio.com/the-incredibles-logo-postcard-zazzlecom-the-incredibles-logo-540_540.jpg'},
        // {year: 2020, title: "Lion King", image: 'https://img.jakpost.net/c/2019/04/11/2019_04_11_69752_1554952087._large.jpg'}
    }

    //Test method
    helloMundo(): string {
        return "Hello wolrld from Movies Service.";
    }

    getMovies(): Movie[] {
        return this.movies;
    }
}