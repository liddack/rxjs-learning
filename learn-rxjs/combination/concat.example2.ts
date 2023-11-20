/**
 * concat
 * - ATM-like scenario, all emissions are in order; an emission only starts
 *   when the previous one successfully completes.
 * - If one of the emissions throw an error, no indication whatsoever
 *   is presented and all subsequent emissions are 'cancelled' (are not emitted).
 */

import { EMPTY, concat, delay, startWith } from 'rxjs';

// Example 2: Display message using concat with delayed observables
// 💡 Run this file using a console tool (ts-node or bun).
const displayMessage = (message: string | number) => {
  console.clear();
  console.log(message);
};
const delayedMessage = (message: string | number, delayedTime = 1000) => {
  return EMPTY.pipe(startWith(message), delay(delayedTime));
  // the following line would have the same result:
  // return of(message).pipe(delay(delayedTime));
};

concat(
  delayedMessage(`Get ready!`),
  delayedMessage(3),
  delayedMessage(2),
  delayedMessage(1),
  delayedMessage(`Go!`),
  delayedMessage(``, 2000),
).subscribe(displayMessage);
