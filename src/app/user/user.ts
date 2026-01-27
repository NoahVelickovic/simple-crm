import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.class';

@Component({
  selector: 'app-user',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent {
  private firestore = inject(Firestore);
  private dialog = inject(MatDialog);

  users$: Observable<UserModel[]> = collectionData(
    collection(this.firestore, 'users'),
    { idField: 'id' }
  ) as Observable<UserModel[]>;

  trackById = (_: number, u: UserModel) => u.id;

  openDialog() {
    this.dialog.open(DialogAddUser);
  }
}
