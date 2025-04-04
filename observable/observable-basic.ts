import { Observable } from "rxjs";

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
        clearInterval(interval);
    };
});

observable.subscribe({
    next: (value) => console.log(`받은 값: ${value}`),
    error: (err) => console.error(err),
    complete: () => console.log("완료")
});