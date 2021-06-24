import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponseBase } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, of } from "rxjs";
import {tap} from "rxjs/operators";
import { environment } from "./../../../environments/environment";

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    constructor(
        private _injector: Injector
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url = req.url;
        return next.handle(req).pipe(
            tap(ev => console.log(ev))
        );
    }

}