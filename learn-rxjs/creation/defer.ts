/**
 * defer
 * - Runs only at subscription time (instead of observable creation time).
 */

import { defer, merge, of, switchMap, timer } from 'rxjs';

// Example 1: Defer to get current date/time at the time of subscription
const s1 = of(`Date/time at observable creation time: ${new Date()}`);
const s2 = defer(() =>
  of(`Date/time at observable subscription time: ${new Date()}`),
);

console.log(new Date());

timer(2000)
  .pipe(switchMap(() => merge(s1, s2)))
  .subscribe(console.log);
