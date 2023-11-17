import { interval, map, withLatestFrom } from "rxjs";

const source$ = interval(5000);
const secondSource$ = interval(1000);

const example = source$.pipe(
  withLatestFrom(secondSource$),
  map(([first, second]) => {
    return `First source (5s): ${first} Second source (1s): ${second}`;
  }),
);

const subscribe = example.subscribe(console.log);
