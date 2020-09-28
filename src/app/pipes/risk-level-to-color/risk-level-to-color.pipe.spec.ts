import { RiskLevelToColorPipe } from './risk-level-to-color.pipe';
import { RiskLevels } from 'src/constants';

const arr = [0, 1, 2, 3, 4, 5, 6, 7];

describe('RiskLevelToColorPipe', () => {
  it('create an instance', () => {
    const pipe = new RiskLevelToColorPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should be return color of Risk base riskId', () => {
    const pipe = new RiskLevelToColorPipe();
    for (const id of arr) {
      const res = pipe.transform(1);
      expect(res).toBe(RiskLevels[id].color);
    }
  });
});
