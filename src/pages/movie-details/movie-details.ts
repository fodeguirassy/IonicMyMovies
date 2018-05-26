import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMovie } from '../../models/IMovie';
import { Storage } from '@ionic/storage'
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  

  movie: IMovie
  isFavorite: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private favoriteMovieProvider: FavoriteMovieProvider) {
  }


  ionViewDidLoad() {
    this.movie = this.navParams.data
    this.favoriteMovieProvider.isFavortieMovie(this.movie)
    .then(value =>(this.isFavorite = value))
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite
    this.favoriteMovieProvider.toogleFavoriteMovie(this.movie)
  }

}
