import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieListPage } from '../movie-list/movie-list';
import { IMovie } from '../../models/IMovie';
import { MovieDetailsPage } from '../movie-details/movie-details';
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';


/**
 * Generated class for the MyMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-movies',
  templateUrl: 'my-movies.html',
})
export class MyMoviesPage {

  favoriteMovies : IMovie[]

  constructor(private navCtrl: NavController, private navParams: NavParams,
  private favoriteProvider : FavoriteMovieProvider) {
    this.favoriteProvider.getFavoriteMovies()
    .then( data => (this.favoriteMovies  = data))
  }

  ionViewDidLoad() { 
  }
  

  goToMoviesList(){
    this.navCtrl.push(MovieListPage)
  }

  goToMovieDetails(movie: IMovie) {
    this.navCtrl.push(MovieDetailsPage, movie)
  }
  
}
