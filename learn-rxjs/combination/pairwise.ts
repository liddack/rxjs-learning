import { interval, pairwise, take } from "rxjs";

const source = interval(1000).pipe(pairwise(), take(5));

source.subscribe(console.log);
