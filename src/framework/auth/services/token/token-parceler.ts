import { Inject, Injectable, InjectionToken } from '@angular/core';

import { nbAuthCreateToken, NbAuthToken, NbAuthTokenClass } from './token';
import { NB_AUTH_TOKENS } from '../../auth.options';

export interface NbTokenPack {
  name: string,
  value: string,
}

export const NB_AUTH_FALLBACK_TOKEN = new InjectionToken<NbAuthTokenClass>('oliveui Auth Options');

/**
 * Creates a token parcel which could be stored/restored
 */
@Injectable()
export class NbAuthTokenParceler {

  constructor(@Inject(NB_AUTH_FALLBACK_TOKEN) private fallbackClass: NbAuthTokenClass,
              @Inject(NB_AUTH_TOKENS) private tokenClasses: NbAuthTokenClass[]) {
  }

  wrap(token: NbAuthToken): string {
    return JSON.stringify({
      name: token.getName(),
      value: token.toString(),
    });
  }

  unwrap(value: string): NbAuthToken {
    let tokenClass: NbAuthTokenClass = this.fallbackClass;
    let tokenValue = '';

    const tokenPack: NbTokenPack = this.parseTokenPack(value);
    if (tokenPack) {
      tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
      tokenValue = tokenPack.value;
    }

    return nbAuthCreateToken(tokenClass, tokenValue);
  }

  // TODO: this could be moved to a separate token registry
  protected getClassByName(name): NbAuthTokenClass {
    return this.tokenClasses.find((tokenClass: NbAuthTokenClass) => tokenClass.NAME === name);
  }

  protected parseTokenPack(value): NbTokenPack {
    try {
      return JSON.parse(value);
    } catch (e) { }
    return null;
  }
}
