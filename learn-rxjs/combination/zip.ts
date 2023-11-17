import { delay, interval, of, take, zip } from "rxjs";

// Example 1: zip multiple observables emitting at alternate intervals
const source1 = of(`Hello`);
const source2 = of(`World!`);
const source3 = of(`Goodbye`);
const source4 = of(`World!`);

const example1 = zip(
  source1,
  source2.pipe(delay(1000)),
  source3.pipe(delay(2000)),
  source4.pipe(delay(3000)),
);

const subscribe1 = example1.subscribe(console.log);

// Example 2: zip when 1 observable completes
const source = interval(1000);
const example2 = zip(source, source.pipe(take(2)));
const subscribe2 = example2.subscribe(console.log);