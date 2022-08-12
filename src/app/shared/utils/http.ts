import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ObservableInput, of } from 'rxjs';

const httpErrorHandler = (
  e: any,
  toastr: ToastrService,
): ObservableInput<any> => {
  if (!(e instanceof HttpErrorResponse)) {
    console.error(e);
    return of(e);
  }

  if (e.status == 0)
    toastr.error(
      "Couldn't connect to server, please try again soon...",
      'Connection Error',
    );
  else toastr.error(e.message, 'Oops!');

  return of(e);
};

export { httpErrorHandler };
