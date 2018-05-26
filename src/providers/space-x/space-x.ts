import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CompanyInfo } from '../../models/CompanyInfo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the SpaceXProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpaceXProvider {

  private spaceXUrl = "https://api.spacexdata.com/v2/info/"
  constructor(private http: HttpClient) {
    console.log('Hello SpaceXProvider Provider');
  }

  getSpaceXCompanyInfo() : Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(this.spaceXUrl)
  }

}
