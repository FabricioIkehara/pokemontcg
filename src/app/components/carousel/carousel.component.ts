import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';



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
  @Input() controls = true;

  selectedIndex = 0;

  ngOnInit(): void {
  }

  //Função para usar seleção por DOT//
selectImage(index: number): void{
  this.selectedIndex = index;
 }

 onPrevClick(): void {
  if(this.selectedIndex === 0) {
    this.selectedIndex = this.images.length - 1;
 } else {
  this.selectedIndex --;
}

}

 onNextClick(): void {
  if(this.selectedIndex === this.images.length - 1) {
    this.selectedIndex = 0;
 } else {
  this.selectedIndex ++;
}
 }
}
