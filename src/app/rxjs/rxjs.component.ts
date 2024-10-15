import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, concatMap, delay, exhaustMap, mergeMap, Observable, of, scan, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  arrayOfSomeNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  arrayOfId = of(...this.arrayOfSomeNumbers);

  newArrayObservable = new BehaviorSubject<Array<number>>(this.arrayOfSomeNumbers)
  newArrayObservable$: Observable<Array<number>> = this.newArrayObservable.asObservable();

  obsValue$ = of(null);

  formControlOne = new FormControl('');


  ngOnInit() {
    this.formControlOne.patchValue('lol value1');

    this.formControlOne.valueChanges.subscribe(v => {
    })

    this.obsValue$ = this.newArrayObservable$.pipe(
      scan((accumulator, currentValue) => [...accumulator, ...currentValue], []),
      tap(console.log)
    )
  }


  /* emissions waits for the previous one to complete */
  concatMapRes$ = this.arrayOfId.pipe(
    concatMap((v) => {
      return this.makeACall(v)
    })
  )

  // the previous emission is cancelled
  switchMapRes$ = this.arrayOfId.pipe(
    switchMap((v) => {
      return this.makeACall(v)
    })
  )

  mergeMap$ = this.arrayOfId.pipe(
    mergeMap((v) => {
      return this.makeACall(v).pipe(
        startWith({ state: 'loading' })
      )
    })
  )

  exhaustMap$ = this.arrayOfId.pipe(
    exhaustMap((v) => {
      return this.makeACall(v)
    })
  )

  updateObsArray() {
    this.newArrayObservable.next([5, 6, 7, 8, 9])
  }

  makeACall(v: number) {
    return of(v).pipe(
      delay(v * 100)
    )
  }
}
