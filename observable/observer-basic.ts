import { Observable, Observer } from "rxjs";

const observable = new Observable<number>((subscriber) => {
    let count = 1;
    const interval = setInterval(() => {
        subscriber.next(count);
        count++;
        if (count > 5) {
            clearInterval(interval);
            subscriber.complete();
        }
    }, 1000)

    return () => {
        console.log("unsubscribe!");
        clearInterval(interval);
    };
});

const observer: Observer<number> = {
    next: (value) => console.log(`받음: ${value}`),
    error: (err) => console.error(err),
    complete: () => console.log("완료")
};

const subscription = observable.subscribe(observer);

setTimeout(()=> {
    subscription.unsubscribe()
}, 3500);