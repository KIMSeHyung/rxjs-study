import { map, of, tap } from "rxjs";

of(1, 2, 3, 4, 5).pipe(
    tap((val) => console.log(`[before map] ${val}`)),
    map((x) => x * 9),
    tap((val) => console.log(`[after map] ${val}`))
).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("stream complete!")
});