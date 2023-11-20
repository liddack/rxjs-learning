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

import { forkJoin, from, mergeMap } from 'rxjs';

const getJson = (url: string) =>
  from(fetch(url)).pipe(mergeMap((x) => x.json()));

// Example 1: Using a dictionary of sources to make AJAX request
forkJoin({
  google: getJson(`https://api.github.com/users/google`),
  microsoft: getJson(`https://api.github.com/users/microsoft`),
  users: getJson(`https://api.github.com/users`),
}).subscribe(console.log);
