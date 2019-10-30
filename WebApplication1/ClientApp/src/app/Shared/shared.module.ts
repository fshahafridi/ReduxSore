import { NgModule, ModuleWithProviders } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { HeaderComponent } from "./component/header.component";
import { reducers } from './store';
import { SpinnerComponent } from "./component/spinner.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        HeaderComponent,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature('sharedState', reducers),
    ],
    exports: [HeaderComponent, SpinnerComponent, CommonModule],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
           
        }
    }

}
