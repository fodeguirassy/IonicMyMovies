import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from '../../models/IMovie';
import { Observable } from 'rxjs/Observable'
import { CompanyInfo } from '../../models/CompanyInfo';

/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  private baseUrl = "../../assets/api/movies.json"
  constructor(private httpClient: HttpClient) {
    console.log('Hello MovieServiceProvider Provider');
  }

  getMovies(): Observable<any> {
    return this.httpClient.get(this.baseUrl)
  }

 

}
