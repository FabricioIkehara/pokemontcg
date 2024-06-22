import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleBarComponent,
    MenuBarComponent, HomeComponent,
    CardListComponent, DetailComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-projeto-pokemon-tcg';
}
