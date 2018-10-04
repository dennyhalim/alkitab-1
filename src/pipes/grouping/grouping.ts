import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GroupingPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'grouping',
})
export class GroupingPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  transform(collection: Array<any>, property:string): Array<any> {
    if(!collection) {
      return null;
  }

  const groupedCollection = collection.reduce((previous, current)=> {
      if(!previous[current[property]]) {
          previous[current[property]] = [current];
      } else {
          previous[current[property]].push(current);
      }

      return previous;
  }, {});

  // this will return an array of objects, each object containing a group of objects
  return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }
}
