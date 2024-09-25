import { Component } from '@angular/core';
import { TitleBarComponent } from '../../components/title-bar/title-bar.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TitleBarComponent, MenuBarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
