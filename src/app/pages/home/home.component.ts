import { Component } from '@angular/core';
import { TitleBarComponent } from '../../components/title-bar/title-bar.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from '../../components/card-list/card-list.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleBarComponent, MenuBarComponent, RouterOutlet, CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {




}
