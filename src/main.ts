import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { DashboardModule } from './app/dashboard/dashboard.module';
import { AppRoutingModule } from './app/app.routes';
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUserService } from './app/services/currentUser.service';
import { HttpLoaderFactory } from './app/app.config';

// ==================== AuthInterceptor ====================
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private currentUserService: CurrentUserService) {} 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.currentUserService.getToken();
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: token
        }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
// ==================== Bootstrap Application ====================
export const appConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),

    // AuthInterceptor
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    // Toastr
    provideToastr({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      preventDuplicates: true,
    }),

    // Modules + Translate
    importProvidersFrom(
      AppRoutingModule,
      DashboardModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      // TranslateModule.forRoot({
      //   defaultLanguage: 'en',
      //   loader: provideTranslateHttpLoader({
      //     prefix: './assets/i18n/',
      //     suffix: '.json',
      //   }),
      // })
    ),
  ],
};

// Bootstrapping the app
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
