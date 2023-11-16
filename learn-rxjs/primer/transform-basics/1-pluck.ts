import { from, mapTo, pluck } from "rxjs";

type Person = {
  firstName: String;
  lastName: String;
};

const persons: Person[] = [
  {
    firstName: "Joana",
    lastName: "Freire",
  },
  {
    firstName: "Carlos",
    lastName: "Nogueira",
  },
  {
    firstName: "Clara",
    lastName: "Carvalho",
  },
  {
    firstName: "Noah",
    lastName: "Martins",
  },
];

const persons$ = from(persons);

persons$.pipe(pluck("lastName")).subscribe((v) => console.log(v));
