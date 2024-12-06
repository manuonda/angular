import { inject } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';
import { finalize } from 'rxjs';

import {
  HttpInterceptorFn,
} from '@angular/common/http';

// @Injectable({ providedIn: 'root' })
// export class SpinnerInterceptor implements HttpInterceptor {
//   private readonly _spinnerService = inject(SpinnerService);

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<unknown>> {
//     this._spinnerService.show();
//     return next
//       .handle(request)
//       .pipe(finalize(() => this._spinnerService.hide()));
//   }
// }

export const SpinnerInterceptor : HttpInterceptorFn = (req, next) => {
 const _spinnerService = inject(SpinnerService);
  _spinnerService.show();
  return next(req).pipe(finalize(() => _spinnerService.hide()));
};