import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

import { LoaderService } from './loader.service';

@Injectable()
export class InterceptService implements HttpInterceptor {

    constructor(private loaderService: LoaderService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        this.loaderService.isLoading.next(true)

        return next.handle(request).pipe(
            tap({
                complete: () => this.loaderService.isLoading.next(false)
            })
        )
    }
}