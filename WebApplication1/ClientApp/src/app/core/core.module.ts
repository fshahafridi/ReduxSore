
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DbService } from './sevices/inmemorydb.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpServiceInetrceptor } from './sevices/httpInterceptor';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
    declarations: [ ],
    imports: [
        InMemoryWebApiModule.forRoot(DbService),
        StoreModule.forFeature('coreState', reducers),
    ],
    providers: [DbService],

})
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers:[{
                provide: HTTP_INTERCEPTORS,
                useClass: HttpServiceInetrceptor,
                multi: true
            }]
        };
    }
}
