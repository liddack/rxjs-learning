import { of } from "rxjs";
import { map } from 'rxjs/operators';

of('hello', 'world!')
  .pipe(map(x => x.substring(0, 1).toUpperCase() + x.substring(1)))
  .subscribe(console.log)
