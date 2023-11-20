/**
 * concat
 * - ATM-like scenario, all emissions are in order; an emission only starts
 *   when the previous one successfully completes.
 * - If one of the emissions throw an error, no indication whatsoever
 *   is presented and all subsequent emissions are 'cancelled' (are not emitted).
 */

import { concat, interval, of, take } from 'rxjs';

// Example 3: (Warning!) concat with source that does not complete

// The following observable never completes because `interval` is a creation
// observable that, by itself, generates values indefinetly in a given
// interval.
concat(interval(1000), of(`This`, `never`, `runs`)).subscribe(console.log);

// ...unless a function like `take` is `pipe`d to `interval`:
concat(interval(1000).pipe(take(3)), of(`This`, `never`, `runs`)).subscribe(
  console.log,
);
