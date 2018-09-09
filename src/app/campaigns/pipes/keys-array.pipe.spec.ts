import { KeysArrayPipe } from './keys-array.pipe';

describe('KeysArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new KeysArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns an array of keys when `transform()` method receives a Map object', () => {
    const pipe = new KeysArrayPipe();
    let map = new Map<string, string>([['key1', 'prop1'], ['key2', 'prop2']] );
    let pipeResults = pipe.transform(map);
    expect(pipeResults.length).toEqual(map.size);
    pipeResults.forEach(key => {
      expect(map.has(key)).toBeTruthy();
    });
  })
});
