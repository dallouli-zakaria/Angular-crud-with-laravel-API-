import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AdminComponent } from './components/admin/admin.component';
import { BooksComponent } from './components/books/books.component';
import { TabletestComponent } from './components/admin/admintable2/tabletest/tabletest.component';
import { DeleteComponent } from './components/admin/admintable2/delete/delete.component';
import { UpdateComponent } from './components/admin/admintable2/update/update.component';
import { LoginComponent } from './components/login-auth/login/login.component';
import { AuthComponent } from './components/login-auth/auth/auth.component';
import { authGuardGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [authGuardGuard] },
  { path: '', component: AdminComponent , canActivate: [authGuardGuard]},
  { path: 'admin/:id', component: AdminComponent, canActivate: [authGuardGuard] },
  { path: 'admin/delete/:id', component: DeleteComponent, canActivate: [authGuardGuard] },
  { path: 'admin/update/:id', component: UpdateComponent , canActivate: [authGuardGuard]},
  { path: 'books', component: BooksComponent, canActivate: [authGuardGuard] },
  {path:'login',component:LoginComponent},
{path:'auth',component:AuthComponent}
];
