import { Routes } from '@angular/router'
import { LoginFormComponent } from './login-form/login-form.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AuthGuard } from './auth.guard'

export const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]
