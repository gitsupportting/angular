import { Pipe, PipeTransform } from '@angular/core';
import { RiskLevels } from 'src/constants';

@Pipe({
  name: 'riskLevelToColor',
})
export class RiskLevelToColorPipe implements PipeTransform {
  transform(level: any): unknown {
    const riskLevel = RiskLevels[level];
    return riskLevel?.color;
  }
}
