import { subscribe } from "diagnostics_channel";
import { Observable } from "rxjs";

export function logtap<T>(label: string) {
    return (source: Observable<T>) => new Observable<T>((subscriber) => {
        return source.subscribe({
            next: (val) => {
                console.log(`[${label}] ${val}`);
                subscriber.next(val);
            },
            error: (err) => console.error(err),
            complete: () => subscriber.complete()
        });
    });
}