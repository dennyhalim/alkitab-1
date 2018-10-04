import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

/*
  Generated class for the BiblelistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BiblelistProvider {
items : any;
  constructor(public http: HttpClient) {
    console.log('Hello BiblelistProvider Provider');
  }
  getKitabs() { 
  return new Promise(resolve => {
    this.http.get('assets/data/alkitab.json').subscribe(data => {
      resolve(data);
      this.items = data;
      console.log(data);
  }, err => {
    console.log(err);
  });
  });
  }
}
