import { Component } from '@angular/core';
import { TitleBarComponent } from '../../components/title-bar/title-bar.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';






@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleBarComponent, MenuBarComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  images = [
    { imageSrc: "assets/C1.png",
      imageAlt: "poke1",
    },
    { imageSrc: "assets/C2.png",
      imageAlt: "poke2",
    },
    { imageSrc: "assets/C3.png",
      imageAlt: "poke3"
    }
  ]

}
