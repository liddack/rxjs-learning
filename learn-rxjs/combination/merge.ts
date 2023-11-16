import { interval, map, merge } from "rxjs";

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example$ = merge(
  first.pipe(map(() => `FIRST!`)),
  second.pipe(map(() => `SECOND!`)),
  third.pipe(map(() => `THIRD!`)),
  fourth.pipe(map(() => `FOURTH!`)),
);

const subscribe = example$.subscribe(console.log);
