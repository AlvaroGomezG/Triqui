import {  Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';

export const ROUTES: Routes = [
    {path : 'home', component: HomeComponent},
    {path : 'play/:nombres', component: PlayComponent},
    {path : '', pathMatch: 'full', redirectTo : 'home'},
    {path : '**', pathMatch: 'full', redirectTo : 'home'}

];


