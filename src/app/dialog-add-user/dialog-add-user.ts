import { Component, inject} from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule,
    MatDialogTitle,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
})
export class DialogAddUser {
  datepicker: any;
  birthDate: Date = new Date();
  user: UserModel = new UserModel();
  loading: boolean = false;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUser>) {}

 async saveUser() {
  this.loading = true;
  this.user.birthDate = this.birthDate.getTime();
  console.log('Current User is:', this.user);

  const usersRef = collection(this.firestore, 'users');
  const docRef = await addDoc(usersRef, this.user.toJSON());

  console.log('Added User', docRef.id);
  this.dialogRef.close();
  this.loading = false;
}}
