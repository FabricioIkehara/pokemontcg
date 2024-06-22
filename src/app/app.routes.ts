import { Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { AboutComponent } from './pages/about/about.component';


export const routes: Routes = [
  { path: 'card-list', component: CardListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'about', component: AboutComponent }

];
