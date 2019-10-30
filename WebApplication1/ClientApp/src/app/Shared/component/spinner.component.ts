import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import * as fromSelectors from '../store/selectors/spinner.selector';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-spinner',
    templateUrl: './spinner.component.html'
  
})
export class SpinnerComponent implements OnInit, OnDestroy    {
    componentActive: boolean = true;
    visible: boolean = false;
    ngOnInit(): void {
         this.store.pipe(select(fromSelectors.toggeSpinner),
            takeWhile(() => this.componentActive)).subscribe(
                isloading => {
                    this.visible = isloading;
                });
    }

    constructor(private store: Store<State>) {  }
    ngOnDestroy(): void {
        this.componentActive = false;
    }
}
