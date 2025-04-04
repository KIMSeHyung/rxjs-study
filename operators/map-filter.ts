import { filter, map, of } from "rxjs";

of(1, 2, 3).pipe(
    map((x) => x * 10)
).subscribe((val) => console.log(`map: ${val}`));

of(1, 2, 3, 4, 5).pipe(
    filter((x) => !(x & 1)),
).subscribe((val) => console.log(`filter: ${val}`));

of(1, 2, 3, 4, 5).pipe(
    filter((x) => x > 2),
    map((x) => x * 100),
).subscribe((val) => console.log(val));