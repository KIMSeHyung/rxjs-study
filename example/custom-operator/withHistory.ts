import { Observable } from "rxjs";

export function withHistory<T>(count: number) {
    return (source: Observable<T>) => new Observable<T[]>((subscriber) => {
        const history: T[] = [];
        return source.subscribe({
            next: (val) => {
                history.push(val);
                if (history.length > count) {
                    history.shift();
                }
                subscriber.next([...history]);
            },
            error: (err) => subscriber.error(err),
            complete: () => subscriber.complete()
        });
    });
}