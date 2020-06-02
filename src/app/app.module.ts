import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { LayoutContainersModule } from './containers/layout/layout.containers.module';
import { JwtModule } from "@auth0/angular-jwt";
import { HttpInterceptorProvider } from './requestInterceptor';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
export function tokenGetter() {
  return localStorage.getItem('token');
}

const config: SocketIoConfig = { url: 'http://localhost:3011', options: { transports: ['polling'] } };
// const config: SocketIoConfig = { url: 'https://pacific-beyond-28416.herokuapp.com', options: { transports: ['polling'] } };

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    SocketIoModule.forRoot(config),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        blacklistedRoutes: [  `${environment.apiUrl}/auth/login`, `${environment.apiUrl}/auth/register` ]
      }
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [HttpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
