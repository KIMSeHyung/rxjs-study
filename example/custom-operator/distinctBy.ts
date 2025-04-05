import { Observable } from "rxjs";

export function distinctBy<T>(keyFn: (value: T) => string) {
    return (source: Observable<T>) => new Observable<T>((subscriber) => {
        const seen = new Set<string>();
        return source.subscribe({
            next: (val) => {
                const key = keyFn(val);
                if(!seen.has(key)) {
                    seen.add(key);
                    subscriber.next(val);
                }
            },
            error: (err) => console.error(err),
            complete: () => subscriber.complete()
        });
    });
}