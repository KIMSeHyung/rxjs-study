import { TestScheduler } from 'rxjs/testing';
import { map } from 'rxjs/operators';

describe('마블 테스트 예제', () => {
  it('대문자로 바꿔준다', () => {
    const scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    scheduler.run(({ cold, expectObservable }) => {
      const source = cold('-a-b-c|');
      const expected = '   -x-y-z|';

      const result = source.pipe(map(val => val.toUpperCase()));

      expectObservable(result).toBe(expected, {
        x: 'A',
        y: 'B',
        z: 'C',
      });
    });
  });
});
