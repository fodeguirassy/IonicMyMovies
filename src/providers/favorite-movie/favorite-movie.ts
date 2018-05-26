import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { IMovie } from '../../models/IMovie';

/*
  Generated class for the FavoriteMovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const MOVIE_KEY = "movie_";

@Injectable()
export class FavoriteMovieProvider {

  store : Storage;
  favoriteMovies : IMovie[]
  
  constructor(private storage: Storage) {
    console.log('Hello FavoriteMovieProvider Provider');
    this.store = storage;
  }

  addFavoriteMovie(movie: IMovie) {
       this.store.set(this.getMovieKey(movie), JSON.stringify(movie));
  }
 
  removeFavoriteMovie(movie: IMovie) {
    this.store.remove(this.getMovieKey(movie));
  }
 
  isFavortieMovie(movie: IMovie) {
    return this.store.get(this.getMovieKey(movie));
  }
 
  toogleFavoriteMovie(movie: IMovie) {
    this.isFavortieMovie(movie).then(
      isFavorite =>
        isFavorite
          ? this.removeFavoriteMovie(movie)
          : this.addFavoriteMovie(movie)
    );
  }
 
  getMovieKey(movie: IMovie) {
    return MOVIE_KEY + movie.id.toString();
  }
 
  getFavoriteMovies(): Promise<IMovie[]> {
    return new Promise(resolve => {
      let results: IMovie[] = [];
      this.store
        .keys()
        .then(keys =>
          keys
            .filter(key => key.includes(MOVIE_KEY))
            .forEach(key =>
              this.store.get(key).then(
                data => results.push(JSON.parse(data))
              )
            )
        );
         resolve(results);
      });
  }
}
