import { NgModule } from '@angular/core';
import { GroupByPipe } from './pipetransform/pipetransform';
import { GroupingPipe } from './grouping/grouping';
@NgModule({
	declarations: [GroupByPipe,
    GroupingPipe],
	imports: [],
	exports: [GroupByPipe,
    GroupingPipe]
})
export class PipesModule {
	static forRoot() {
		return {
			ngModule: PipesModule,
			providers: [],
		};
	 }
}
