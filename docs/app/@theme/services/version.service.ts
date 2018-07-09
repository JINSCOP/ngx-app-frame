import { Injectable } from '@angular/core';

@Injectable()
export class NgdVersionService {

  getngx-app-frameVersion() {
    return require('../../../../package.json').version;
  }
}
