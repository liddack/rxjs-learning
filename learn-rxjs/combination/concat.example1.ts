/**
 * concat
 * - ATM-like scenario, all emissions are in order; an emission only starts
 *   when the previous one successfully completes.
 * - If one of the emissions throw an error, no indication whatsoever
 *   is presented and all subsequent emissions are 'cancelled' (are not emitted).
 */

import { concat, of } from 'rxjs';

// Example 1: Basic concat usage with three observables
concat(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(console.log);
