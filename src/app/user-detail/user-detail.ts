import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-user-detail',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {

}
