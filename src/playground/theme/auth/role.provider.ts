import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NbAuthService, NbAuthJWTToken } from '@ngx-app-frame/auth';
import { NbRoleProvider } from '@ngx-app-frame/security';

@Injectable()
export class NbCustomRoleProvider implements NbRoleProvider {

  constructor(private authService: NbAuthService) {
  }

  getRole(): Observable<string> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          if (token instanceof NbAuthJWTToken && token.isValid()) {
            return token.getPayload()['role'];
          }
          return 'guest';
        }),
      );
  }
}
