import { AsyncSubject } from "rxjs";

const subject = new AsyncSubject<number>();

subject.subscribe((val) => console.log(`구독자A: ${val}`));

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe((val) => console.log(`구독자B: ${val}`));

subject.next(4);

subject.complete();