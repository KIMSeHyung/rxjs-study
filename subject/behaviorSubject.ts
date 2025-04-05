import { BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject<number>(0);

subject.subscribe((val) => console.log(`구독1: ${val}`));

subject.next(1);
subject.next(2);

setTimeout(() => {
    subject.subscribe((val) => console.log(`구독2: ${val}`));
    subject.next(3);
}, 1000);

