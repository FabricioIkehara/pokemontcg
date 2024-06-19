import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private randomCardUrl = 'https://api.pokemontcg.io/v2/cards/random';

  constructor(private http: HttpClient) {}

  loadRandomPokemonCard(): Observable<any> {
    return this.http.get(this.randomCardUrl);
  }
}
