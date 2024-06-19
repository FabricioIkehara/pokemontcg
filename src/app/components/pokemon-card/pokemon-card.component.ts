import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  cards: any[] = [];

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    // Carregue alguns cards aleatórios inicialmente
    for (let i = 0; i < 5; i++) {
      this.loadRandomCard();
    }
  }

  loadRandomCard(): void {
    this.PokemonService.loadRandomPokemonCard().subscribe((data) => {
      this.cards.push(data.data);
    });
  }

  // Lógica para carregar mais cards quando o usuário rolar a página
}
