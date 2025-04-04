import { of, take } from "rxjs";

of(1, 2, 3, 4, 5).pipe(
    take(3)
).subscribe({
    next: (val) => console.log(`take: ${val}`),
    error: console.error,
    complete: () => console.log("take end!")
});