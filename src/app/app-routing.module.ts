import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
import { TravelroutesComponent } from './pages/travelRoutes/travelroutes/travelroutes.component';
import { TravelroutesAdministrationComponent } from './pages/travelRoutes/travelroutes-administration/travelroutes-administration.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listRoutes',
    component: TravelroutesComponent,
    //canActivate: [MsalGuard]
  },
  {
    path: 'list',
    component: TravelroutesAdministrationComponent,
    //canActivate: [MsalGuard]
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }