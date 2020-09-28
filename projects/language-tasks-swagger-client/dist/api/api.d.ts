export * from './default.service';
import { DefaultService } from './default.service';
export * from './default.serviceInterface';
export * from './sIFTADMIN.service';
import { SIFTADMINService } from './sIFTADMIN.service';
export * from './sIFTADMIN.serviceInterface';
export declare const APIS: (typeof DefaultService | typeof SIFTADMINService)[];
