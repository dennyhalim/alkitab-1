import { GroupingPipe } from './../../pipes/grouping/grouping';
import { GroupByPipe } from './../../pipes/pipetransform/pipetransform';
import { SearchPipe } from '../../pipes/search/search';
import { SortPipe } from '../../pipes/sort/sort';
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
  Pipes: [GroupByPipe,GroupingPipe,SortPipe,SearchPipe]
  descending: boolean = false;
  order: number;
  column: string = 'name';
  getKitabss() {
    this.BiblelistProvider.getKitabs()
    .then(data => {
      this.kitabss = data['alkitab'];
      //console.log(this.kitabss[0]);
    });
  }
  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public BiblelistProvider: BiblelistProvider) {
    this.getKitabss();
    this.sort();
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
