import { delay, interval, map, of, race } from 'rxjs';

// example 1
const example1 = race(
  interval(1500).pipe(map(() => `1.5s won!`)),
  interval(1000).pipe(map(() => `1s won!`)),
  interval(2000).pipe(map(() => `2s won!`)),
  interval(2500).pipe(map(() => `2.5s won!`)),
);

// example1.subscribe(console.log);

// example 2
const first = of(`first`).pipe(
  delay(100),
  map(_ => {
    throw `error occured`;
  }),
);
const second = of(`second`).pipe(delay(200));
const third = of(`second`).pipe(delay(300));

race(first, second, third).subscribe(console.log);
