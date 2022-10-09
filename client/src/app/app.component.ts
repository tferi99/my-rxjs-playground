import { Component, OnInit } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { of, throwError, Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { RxjsService } from './services/rxjs.service';
import * as fromRoot from './store';
import {
  CallWithoutError,
  CallWithError,
  CallWithErrorKeepListening,
  CallWithErrorNotCaught,
  EffectReturnTest
} from './store/app.actions';
import { CourseService } from './services/course.service';
import { Course } from './model';
import { selectDescription, selectSomeString } from './store/app.selectors';
import { Actions } from '@ngrx/effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxJS Playground';

  searchTerm$ = new Subject<string>();
  searchTermError$ = new Subject<string>();
  resultOk?: any;
  resultBad?: any;

  description$: Observable<string> = this.store.pipe(select(selectDescription));
  someString$: Observable<string> = this.store.pipe(select(selectSomeString));

  constructor(
    private rxjsService: RxjsService,
    private courseService: CourseService,
    private store: Store<fromRoot.State>,
    private acrions$: Actions
  ) {}

  ngOnInit(): void {
    this.courseService.searchOk(this.searchTerm$).pipe(
      finalize(() => console.log('searchTerm$ finalize called!'))
    ).subscribe(
      result => {
        console.log('Got results from search (good catch)');
        this.resultOk = result;
      }
    );

    this.courseService.searchBadCatch(this.searchTermError$).pipe(
      finalize(() => console.log('searchTermError$ (bad catch) finalize called!'))
    ).subscribe(
      result => {
        console.log('Got results from search (bad catch)');
        this.resultBad = result;
      }
    );

    this.rxjsService.subject
      .pipe(
        catchError(error => {
          console.log('Error in catchError', error);
          return of(error);
        })
      )
      .subscribe(
        value => {
          console.log('Subject value:', value);
        },
        error => console.log('Error!', error)
      );

      this.acrions$.subscribe(
        action => console.log('actions$ emitted: ', action),
        err => console.log('actions$ COMPLETED with error: ', err),
        () => console.log('actions$ COMPLETED')
      );
  }

  pokeSubject(value: boolean) {
    this.rxjsService.nextSubject(value);
  }

  errorSubject() {
    this.rxjsService.errorSubject();
  }

  ngrxSuccess() {
    this.store.dispatch(new CallWithoutError());
  }

  ngrxError() {
    this.store.dispatch(new CallWithError());
  }

  ngrxErrorKeepListening() {
    this.store.dispatch(new CallWithErrorKeepListening());
  }

  ngrxErrorDontCatch() {
    this.store.dispatch(new CallWithErrorNotCaught());
  }

  ngrxEffectReturnTest(actionNum) {
    this.store.dispatch(new EffectReturnTest(actionNum));
  }
}
