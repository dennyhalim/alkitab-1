import { NgModule } from '@angular/core';
import { GroupByPipe } from './pipetransform/pipetransform';
import { GroupingPipe } from './grouping/grouping';
import { SearchPipe } from './search/search';
import { SortPipe } from './sort/sort';
@NgModule({
	declarations: [GroupByPipe,
    GroupingPipe,
    SearchPipe,
    SortPipe],
	imports: [],
	exports: [GroupByPipe,
    GroupingPipe,
    SearchPipe,
    SortPipe]
})
export class PipesModule {
	static forRoot() {
		return {
			ngModule: PipesModule,
			providers: [],
		};
	 }
}
