import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { CrComponent } from './cr/cr.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'cv',component:CvComponent},
    {path:'cr',component:CrComponent},
    {path:'products',component:ProductsComponent},
    {path:'contact',component:ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
