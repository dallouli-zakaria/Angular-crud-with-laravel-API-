import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AdminComponent } from './components/admin/admin.component';
import { BooksComponent } from './components/books/books.component';
import { TabletestComponent } from './components/admin/admintable2/tabletest/tabletest.component';
import { DeleteComponent } from './components/admin/admintable2/delete/delete.component';
import { UpdateComponent } from './components/admin/admintable2/update/update.component';
import { AddComponent } from './components/admin/admintable2/add/add.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/:id', component: AdminComponent },
  { path: 'admin/delete/:id', component: DeleteComponent },
  { path: 'admin/update/:id', component: UpdateComponent },
  { path: 'books', component: BooksComponent },
];
