import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest , HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { retry, catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';

export class HttpErrorInterceptor implements HttpInterceptor {
    // constructor(swa:Sw)
    intercept(request:HttpRequest<any>,next: HttpHandler):Observable<any>{
        return next.handle(request)
               .pipe(
                   retry(1),
                   catchError((error: HttpErrorResponse)=>{
                       console.log("sssssssss",error)
                       let errorMessage = '';
                    if(error.error instanceof ErrorEvent){
                        // clientSide error
                        errorMessage = `Error ${error.error.message};
                        }`
                    } else {
                        // serverSide Error
                        errorMessage = `Error code:${error.status}\nMessage:${error.message}`
                    }
                    if(error.status == 409){
                        Swal.fire('Failed','Account Creation Failed','error')
                        return throwError(errorMessage)
                    }
                    Swal.fire('Failed', errorMessage ,'error')
                    return throwError(errorMessage)
                   })

               )
    }
}