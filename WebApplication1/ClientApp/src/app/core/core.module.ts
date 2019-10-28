import { NgModule, ModuleWithProviders } from "@angular/core";
import { StoreModule } from "@ngrx/store";

@NgModule({
    imports: [
        StoreModule.forRoot({})
    ],
    exports: [],
    declarations: [],
    providers: []
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
            
        }
    }

}
