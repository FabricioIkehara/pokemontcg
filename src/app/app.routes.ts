import { Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'card-list', component: CardListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent }


];
