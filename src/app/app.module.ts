import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"; // Import 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptor } from '@azure/msal-angular'; // Import MsalInterceptor
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { TravelroutesComponent } from './pages/travelRoutes/travelroutes/travelroutes.component';
import { TravelroutesAdministrationComponent } from './pages/travelRoutes/travelroutes-administration/travelroutes-administration.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import { TableModule } from 'primeng/table';


import { TitleComponent } from './shared/widget/title/title.component';


const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    TravelroutesComponent,
    TravelroutesAdministrationComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    HttpClientModule,
    MenubarModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    ToolbarModule,
    CalendarModule,
    TableModule,
    MsalModule.forRoot( new PublicClientApplication({
      auth: {
        clientId: '7add3510-5bf4-4e09-ba6b-17828a04d119',
        authority: 'https://login.microsoftonline.com/7c51776e-2503-43fb-a994-8f6df9a6b83d',
        redirectUri: '/',
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE,
      }
    }), {
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: ['user.read']
        }
    }, {
      interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
      protectedResourceMap: new Map([ 
          ['Enter_the_Graph_Endpoint_Here/v1.0/me', ['user.read']]
      ])
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }