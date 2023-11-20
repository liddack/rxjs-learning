/**
 * forkJoin
 * - Waits all inner observables complete and emits the last emitted
 *   value from each.
 * - You can use it to get the last emmited value of multiple
 *   observables in an object/dictionary.
 * - It's like `Promise.all`, but with observables.
 * - Errors should be handled differently depending on the intended use:
 *   * If one of the inner observables throw an error and you don't want to
 *     lose all of the other observables in the `forkJoin`, the error must be
 *     catched *inside the inner observable* (like, piping `catchError`)
 *   * If you *only* care if all observables complete without errors, any
 *     errors should be caught *outside the `forkJoin`*.
 */

import { catchError, delay, forkJoin, of, throwError } from 'rxjs';

// Example 5: Getting successful results when one inner observable errors
forkJoin({
  sourceOne: of(`Hello`),
  sourceTwo: of(`World`).pipe(delay(1000)),
  sourceThree: throwError(() => new Error(`This will error`)).pipe(
    catchError((error) => of(error)),
  ),
}).subscribe(console.log);
