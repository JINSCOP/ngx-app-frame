import { Injectable } from '@angular/core';

@Injectable()
export class NgdVersionService {

  getoliveuiVersion() {
    return require('../../../../package.json').version;
  }
}
