import { Observable } from "rxjs";

export function filterEven(): (source: Observable<number>) => Observable<number> {
    return (source) => new Observable((subscriber) => {
        return source.subscribe({
            next: (val) => {
                if (val !== 0 && !(val & 1)) {
                    subscriber.next(val);
                }
            },
            error: (err) => console.error(err),
            complete: () => subscriber.complete()
        });
    });
}