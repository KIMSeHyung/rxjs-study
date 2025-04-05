import { Subject } from "rxjs";

const subject = new Subject<number>();

subject.subscribe((val) => console.log(`구독1: ${val}`));
subject.subscribe((val) => console.log(`구독2: ${val}`));

subject.next(1);
subject.next(2);
