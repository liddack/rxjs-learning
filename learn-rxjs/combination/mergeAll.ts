import { delay, interval, map, mergeAll, of, take } from 'rxjs';

// Example 1: mergeAll with promises
const myPromise = (val: number) =>
  new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));

const source = of(1, 2, 3);

const example1 = source.pipe(
  map(val => myPromise(val)),
  mergeAll(),
);

// example1.subscribe(console.log);

// Example 2: mergeAll with concurrent parameter

const source2 = interval(500).pipe(take(5));
const example2 = source2
  .pipe(
    map(val => source2.pipe(delay(1000), take(3))),
    mergeAll(2),
  )
  .subscribe(console.log);
