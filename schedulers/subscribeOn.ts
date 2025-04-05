import { asyncScheduler, Observable, observeOn, subscribeOn } from "rxjs";

/**
 * subscribeOn → Observable 내부 실행 타이밍을 스케줄링
observeOn → .next() 로 방출되는 타이밍을 스케줄링
 */
const obs$ = new Observable((subscriber) => {
    console.log("Observable 실행");
    subscriber.next("hello");
    subscriber.complete();
});

obs$.pipe(
    subscribeOn(asyncScheduler),
    observeOn(asyncScheduler)
).subscribe((val) => console.log(`구독: ${val}`));

console.log("done");