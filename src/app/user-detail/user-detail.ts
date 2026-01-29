import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from "@angular/material/card";
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/user.class';
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAdress } from '../dialog-edit-adress/dialog-edit-adress';
import { DialogEditUser } from '../dialog-edit-user/dialog-edit-user';


@Component({
  selector: 'app-user-detail',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatIcon, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
   userId = "";
   user: UserModel = {} as UserModel;
   private route = inject(ActivatedRoute);
   private firestore = inject(Firestore);
   private cdr = inject(ChangeDetectorRef);
   private dialog = inject(MatDialog);

   ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get("id") || "";
      this.getUser()
    })
}

getUser() {
  const userRef = doc(this.firestore, "users", this.userId);
  docData(userRef).subscribe((user) => {
    this.user = user as UserModel;
    console.log(this.user);
    this.cdr.markForCheck();
  });
}

editMenu() {
  const dialog = this.dialog.open(DialogEditAdress);
  dialog.componentInstance.user = new UserModel(this.user);
   dialog.componentInstance.userId = this.userId;
}

editUserDetail() { 
  const dialog = this.dialog.open(DialogEditUser);
  dialog.componentInstance.user = new UserModel(this.user);
  dialog.componentInstance.userId = this.userId;
}
}
