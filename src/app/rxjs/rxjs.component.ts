import { Component } from '@angular/core';
import { concatMap, delay, exhaustMap, mergeMap, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {

  arrayOfSomeNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  arrayOfId = of(...this.arrayOfSomeNumbers);


  /* emissions waits for the previous one to complete */
  concatMapRes$ = this.arrayOfId.pipe(
    concatMap((v) => {
      return this.makeACall(v)
    }),
    tap((v) => {
      console.log(v);
    })
  )

  // the previous emission is cancelled
  switchMapRes$ = this.arrayOfId.pipe(
    switchMap((v) => {
      return this.makeACall(v)
    }),
    tap((v) => {
      console.log(v);
    })
  )

  mergeMap$ = this.arrayOfId.pipe(
    mergeMap((v) => {
      return this.makeACall(v)
    }),
    tap((v) => {
      console.log(v);
    })
  )

  exhaustMap$ = this.arrayOfId.pipe(
    exhaustMap((v) => {
      return this.makeACall(v)
    }),
    tap((v) => {
      console.log(v);
    })
  )


  makeACall(v: number) {
    return of(v).pipe(
      delay(v * 100)
    ).pipe(
      tap((v) => {
        console.log('call ' + v);
      })
    )
  }
}
