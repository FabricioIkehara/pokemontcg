import { CommonModule } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { Carousel } from 'bootstrap';
import { BsDropdownModule } from 'ng-bootstrap/dropdown';
import { TooltipModule } from 'ng-bootstrap/tooltip';
import { Interface } from 'readline';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImage[] = [];

  @Input() indicators = true;

  selectedIndex = 0;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
