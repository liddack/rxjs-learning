import { Observable } from "rxjs";

const observer = new Observable(function subscribe(subscriber) {
  try {
    subscriber.next("My first observable");
    subscriber.next("Testing Observable");
    subscriber.complete();
  } catch (e) {
    subscriber.error(e);
  }
});
observer.subscribe(
  (x) => console.log(x),
  (e) => console.log(e),
  () => console.log(`Observable is complete!`),
);
