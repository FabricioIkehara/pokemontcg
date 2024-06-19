import { Component } from '@angular/core';
import { TitleBarComponent } from '../../components/title-bar/title-bar.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-listcards',
  standalone: true,
  imports: [TitleBarComponent, MenuBarComponent],
  templateUrl: './listcards.component.html',
  styleUrl: './listcards.component.css'
})
export class ListcardsComponent {

}
