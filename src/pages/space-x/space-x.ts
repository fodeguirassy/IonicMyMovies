import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyInfo } from '../../models/CompanyInfo';
import { SpaceXProvider } from '../../providers/space-x/space-x';

/**
 * Generated class for the SpaceXPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-x',
  templateUrl: 'space-x.html',
})
export class SpaceXPage {

  companyInfo : CompanyInfo

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private spaceXProvider: SpaceXProvider) {
  
    this.spaceXProvider.getSpaceXCompanyInfo()
    .subscribe((data) => {
      this.companyInfo = data
    })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceXPage');
  }

}
