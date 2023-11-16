import { filter, map, of } from "rxjs";

const dataSource = of(1, 2, 3, 4, 5);

console.log(`Subscription1`);
const subscription1 = dataSource
  .pipe(map((x) => x + 1))
  .subscribe((x) => console.log(x));

console.log(`\nSubscription2`);
const subscription2 = dataSource
  .pipe(filter((x) => x >= 2))
  .subscribe((x) => console.log(x));
