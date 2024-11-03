import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DefaultDisplayComponent } from '../components/default-display/default-display.component';
import { SectorDisplayViewComponent } from '../components/sector-display-view/sector-display-view.component';
import { UserSectorDataViewComponent } from '../components/user-sector-data-view/user-sector-data-view.component';
import { LoginViewComponent } from '../components/login-view/login-view.component';


const baseUrlRoot = '';

export const routes: Routes = [
  { path: '', redirectTo: `${baseUrlRoot}login`, pathMatch: 'full' },
  { path: `${baseUrlRoot}settings`, component: UserSectorDataViewComponent },
  { path: `${baseUrlRoot}sectors`, component: SectorDisplayViewComponent },
  { path: `${baseUrlRoot}login`, component: LoginViewComponent },
  { path: '**', component: DefaultDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }