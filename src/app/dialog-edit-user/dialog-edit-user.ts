import { Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../../models/user.class';
import { Firestore, collection, addDoc, updateDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './dialog-edit-user.html',
  styleUrl: './dialog-edit-user.scss',
})
export class DialogEditUser {
  loading: boolean = false;
  user: UserModel = new UserModel();
  datepicker: any;
  birthDate: Date = new Date();
  userId: string = "";

public readonly dialogRef = inject(MatDialogRef<DialogEditUser>);
private readonly firestore = inject(Firestore);

async saveUser() {
  this.loading = true;

  const userRef = doc(this.firestore, 'users', this.userId);
  await updateDoc(userRef, this.user.toJSON());

  this.loading = false;
  this.dialogRef.close();
}
}
