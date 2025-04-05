import { Observable, Subscription, timer } from "rxjs";

export function debounceTyping<T>(ms: number) {
    return (source: Observable<T>) => new Observable<T>((subscriber) => {
        let sub: Subscription | null = null;
        return source.subscribe({
            next: (val) => {
                if(sub) {
                    sub.unsubscribe();
                }
                sub = timer(ms).subscribe(() => subscriber.next(val));
            },
            error: (err) => subscriber.error(err),
            complete: () => subscriber.complete()
        });
    });
}