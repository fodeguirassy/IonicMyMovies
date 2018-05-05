import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';
import { MyMoviesPage } from '../pages/my-movies/my-movies';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyMoviesPage,
    MovieListPage,
    MovieDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyMoviesPage,
    MovieListPage,
    MovieDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieServiceProvider
  ]
})
export class AppModule {}
