import { Routes } from '@angular/router';
import { Home } from './customer/home/home';

export const routes: Routes = [
    {path:"customer/home",component:Home},
    {path:"customer",redirectTo:"customer/home", pathMatch:"full"},
    {path:"",redirectTo:"customer/home", pathMatch:"full"},
    { path: '', component:Home },
    { path: ' ', component:Home },
    { path: '**', redirectTo: '', pathMatch:"full"}
];
