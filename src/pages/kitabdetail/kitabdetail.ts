import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BiblelistProvider } from '../../providers/biblelist/biblelist';

/**
 * Generated class for the KitabdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kitabdetail',
  templateUrl: 'kitabdetail.html',
})
export class KitabdetailPage {
  kitabs: any;
  kitabdetail: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.kitabdetail = this.navParams.get('item');
    console.log('sjdjs')
    console.log(this.kitabdetail[0].kitab)
    console.log('efguhhd')

      // this.BiblelistProvider.getKitabs(this.kitabdetail)
      // .then(data => {
      //   this.kitabs = data;
      //   console.log(this.kitabs);
      // });
  }
  
}
