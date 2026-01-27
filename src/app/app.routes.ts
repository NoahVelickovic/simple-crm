import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { UserComponent } from './user/user';

export const routes: Routes = [
    {path: '', component: Dashboard},
    {path: 'user', component: UserComponent}
];
