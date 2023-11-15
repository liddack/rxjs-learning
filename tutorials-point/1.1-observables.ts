#!/usr/bin/env bun

import { Observable } from "rxjs"

// Create observable
const observable = new Observable(function subscribe(subscriber) {
    subscriber.next(`My first observable`)
})

// Subscribe to observable
observable.subscribe(x => console.log(x))
