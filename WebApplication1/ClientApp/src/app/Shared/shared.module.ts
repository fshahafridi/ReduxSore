import { NgModule, ModuleWithProviders } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppReducer } from "./store/reducer/app.reducer";
import { HeaderComponent } from "./component/header.component";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        StoreModule.forRoot(AppReducer),
        EffectsModule.forRoot([]),
    ],
    exports: [HeaderComponent],
   
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
           
        }
    }

}
