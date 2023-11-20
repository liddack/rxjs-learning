/**
 * forkJoin
 * - Waits all inner observables complete and emits the last emitted
 *   value from each.
 * - You can use it to get the last emmited value of multiple
 *   observables in an object/dictionary.
 * - It's like `Promise.all`, but with observables.
 * - Errors should be handled differently depending on the intended use:
 *   * If one of the inner observables throw an error and you don't want to
 *     lose all the other observables in the `forkJoin`, the error must be
 *     catched *inside the inner observable* (like, piping `catchError`)
 *   * If you *only* care if all observables complete without errors, any
 *     errors should be caught *outside the `forkJoin`*.
 */

import { delay, forkJoin, from, interval, mergeMap, of, take } from 'rxjs';

// Example 2: Observables completing after different durations
const myPromise = (val: string) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Promise resolved: ${val}`), 5000),
  );

forkJoin({
  sourceOne: of(`Hello`),
  sourceTwo: of(`World`).pipe(delay(1000)),
  sourceThree: interval(1000).pipe(take(1)),
  sourceFour: interval(1000).pipe(take(2)),
  sourceFive: myPromise(`RESULT`),
}).subscribe(console.log);
