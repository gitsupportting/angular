import { RightUnderscorePipe } from './right-underscore.pipe';

describe('RightUnderscorePipe', () => {
  it('create an instance', () => {
    const pipe = new RightUnderscorePipe();
    expect(pipe).toBeTruthy();
  });

  describe('#right-underscore-pipe', () => {
    it('The right-under-score should be show only text on the right of underscore', () => {
      const pipe = new RightUnderscorePipe();

      const withUnderScore = 'hello_world';
      expect(pipe.transform(withUnderScore)).toEqual('world');

      const withOutUnderScore = 'helloworld';
      expect(pipe.transform(withOutUnderScore)).toEqual('helloworld');
    });
  });
});
