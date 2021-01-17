import { Parameter, Dash } from 'child-shell';
import { PS_TYPES_MAP } from './PSTypeConverter';

export class PSParameter extends Parameter {
  constructor(dash: Dash, name: string, value?: unknown) {
    super(dash, name, value, PS_TYPES_MAP);
  }
}
