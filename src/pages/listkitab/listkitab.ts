import { GroupingPipe } from './../../pipes/grouping/grouping';
import { GroupByPipe } from './../../pipes/pipetransform/pipetransform';
import { Component, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BiblelistProvider } from '../../providers/biblelist/biblelist';
//import { GroupByPipe } from "../../pipes/pipetransform/pipetransform";
import { KitabdetailPage } from '../Kitabdetail/Kitabdetail';


/**
 * Generated class for the ListkitabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listkitab',
  templateUrl: 'listkitab.html',
  
})
export class ListkitabPage {
  kitabss: any;
  Pipes: [GroupByPipe,GroupingPipe]
  getKitabss() {
    this.BiblelistProvider.getKitabs()
    .then(data => {
      this.kitabss = data['alkitab'];
      //console.log(this.kitabss[0]);
    });
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public BiblelistProvider: BiblelistProvider) {
    this.getKitabss();
    //console.log(this.kitabss);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListkitabPage');
  }
  gotoPeople(key) {
    //console.log(key)
    this.navCtrl.push(KitabdetailPage, {
      item: key,
      
    });

  }

}
