import { Observable, Observer } from "rxjs";

/**
 * Observable이 1초마다 1부터 숫자를 무한대로 방출하도록 만들어
 * 3초 뒤에 구독을 해지하고 "수동으로 구독 해제됨" 메시지를 출력해봐
 */
const observable = new Observable<number>((subscriber) => {
    let count = 1;
    const interval = setInterval(() => {
        subscriber.next(count);
        count++;
    }, 1000);

    return () => {
        console.log("수동으로 구독 해제됨");
        clearInterval(interval)
    }
})

const observer: Observer<number> = {
    next: (value) => console.log(`receive: ${value}`),
    error: console.error,
    complete: () => console.log(`complete!`)
};

const subscribe = observable.subscribe(observer);

setTimeout(() => {
    subscribe.unsubscribe()
}, 3000);