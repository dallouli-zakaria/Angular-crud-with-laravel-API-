import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import {
  MatTableModule,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CrudService } from '../../services/crud.service';
import { User } from '../../model/User';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { AddComponent } from '../add/add.component';
import { AdminAddUserComponent } from '../../admin-add-user/admin-add-user.component';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-tabletest',
  templateUrl: './tabletest.component.html',
  styleUrl: './tabletest.component.css',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIcon,
    MatCard,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormField,
    MatLabel,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class TabletestComponent implements AfterViewInit {
  displayedColumns = ['id', 'name', 'price', 'descrition', 'Action'];
  dataSource: any;
  userlist!: User[];
  userId!: Number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  editdata!: User;
  applyForm: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TabletestComponent>,
    private crud: CrudService,
    private router: ActivatedRoute,
    private route: Router,
    public dialog: MatDialog
  ) {}

  ngAfterViewInit(): void {
    this.showusersdata();
  }

  showusersdata() {
    this.crud.getusers().subscribe((res) => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource<User>(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  delete(code: any) {
    this.userId = parseInt(this.router.snapshot.paramMap.get('id') || '');
    this.openDialog(code, 'delete user', 0, 0);

    //console.log(code);
    //this.crud.deleteuser(this.userId);
  }
  edit(code: any) {
    this.openDialog3(code, 'edit user', 0, 0);
  }
  adduser() {
    this.openDialog2(0, 'Add user', 0, 0);
  }

  filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  openDialog(
    code: Number,
    title: any,
    enterAnimationDuration: number,
    exitAnimationDuration: number
  ): void {
    var _popup = this.dialog.open(DeleteComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        title: title,
        code: code,
      },
    });
    _popup.afterClosed().subscribe((res) => {
      this.showusersdata();
    });
    //console.log('delete');
  }

  openDialog2(
    code: Number,
    title: any,
    enterAnimationDuration: number,
    exitAnimationDuration: number
  ): void {
    var _popup2 = this.dialog.open(AdminAddUserComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        title: title,
        code: code,
      },
    });
    _popup2.afterClosed().subscribe((res) => {
      setTimeout(() => {
        this.showusersdata();
      }, 1000);
    });
  }

  openDialog3(
    code: Number,
    title: any,
    enterAnimationDuration: number,
    exitAnimationDuration: number
  ): void {
    var _popup2 = this.dialog.open(UpdateComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        title: title,
        code: code,
      },
    });
    _popup2.afterClosed().subscribe((res) => {
      setTimeout(() => {
        this.showusersdata();
      }, 1000);
    });
  }

  popupdata(id: any) {
    this.crud.getUserById(id).subscribe((item) => {
      this.editdata = item;
      this.applyForm.setValue({ name: this.editdata.name });
    });
  }
}
