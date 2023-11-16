import { of } from "rxjs";

const observable = of(1, 2, 3);

observable.subscribe({
  next: (x) => console.log(x),
  error: (e) => console.log(e),
  complete: () => console.log(`Complete!`),
});

