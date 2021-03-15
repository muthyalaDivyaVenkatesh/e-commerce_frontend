import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler,HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    
    constructor(){}

    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
        const token = localStorage.getItem('shop-token')

        // console.log("we are seeing the Token",token,req.headers.InterceptorSkipHeader)
        // if(req.headers['InterceptorSkipHeader']){
        //     return next.handle(req)
        // }
        console.log("we are inside Intercept")
        req = req.clone({
            setHeaders:{
                'Authorization': `Bearer ${token}`
            }
        })

        return next.handle(req)
    }

}