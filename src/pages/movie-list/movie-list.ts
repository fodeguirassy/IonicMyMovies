import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMovie } from '../../Models/IMovie';
import { MovieDetailsPage } from '../movie-details/movie-details';
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';


/**
 * Generated class for the MovieListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
})
export class MovieListPage {

  movies: IMovie[] 

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private movieApi: MovieServiceProvider) {
    
      movieApi.getMovies().subscribe(data => {
        this.movies = data
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieListPage');
  }

  goToMovieDetails(movie: IMovie) {
    this.navCtrl.push(MovieDetailsPage, movie)
  }
  
}
