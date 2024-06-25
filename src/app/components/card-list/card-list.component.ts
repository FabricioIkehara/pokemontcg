
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';



@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [ HttpClientModule, CommonModule, FormsModule, RouterModule, TitleBarComponent, MenuBarComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit{
   readonly apiURL : string = 'https://api.pokemontcg.io/v2';
   pageSize : number = 10;
   page : number = 1;
   cardList: any[] = [];

   cardListFind: any[] =[];

   searchText: string = '';

   totalPages: number = 250;
   card: any;

   searchResultsAvailable: boolean = false;

   selectedType: string = ''


   typesCard: string[] = [
    'Water',
    'Fogo',
    'Grama',
    'Elétrico',
    'Psychic',
    'Luta',
    'Escuridão',
    'Metal',
    'Dragão',
    'Fada',
    'Normal'
  ];


constructor(private http : HttpClient, private router: Router) {}
  ngOnInit(): void {
     this.fetchCardList();
}

  proxPagina(){
    this.page = this.page+1;
    this.http.get(`${ this.apiURL }/cards?page=${this.page}&pageSize=${this.pageSize}`)
    .subscribe((resultado : any) => {this.cardList= resultado.data;});
  }

  prevPagina(){
    this.page = this.page-1;
    this.http.get(`${ this.apiURL }/cards?page=${this.page}&pageSize=${this.pageSize}`)
    .subscribe((resultado : any) => {this.cardList= resultado.data;});
  }

  exibirDetalhesDaCarta(card: any) {
    this.router.navigate(['/detail', card.id]);
  }

  searchCards() {
    if (this.searchText) {
      this.http
        .get(`${this.apiURL}/cards?q=name:${this.searchText}`)
        .subscribe((resultado: any) => {
          this.cardListFind = resultado.data.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
          this.searchResultsAvailable = this.cardListFind.length > 0;
        });
    } else {
      this.fetchCardList();
      this.searchResultsAvailable = false;
    }
  }


  private fetchCardList() {
    this.http
      .get(`${this.apiURL}/cards?page=${this.page}&pageSize=${this.pageSize}`)
      .subscribe((resultado: any) => {
        this.cardList = resultado.data;
      });
  }

  retrocedePagina() {
    if (this.page > 1) {
      this.page--;
      this.atualizaResultados();
    }
  }


  avancarPagina() {
    this.totalPages = Number(this.totalPages);
      if (this.page < this.totalPages) {
        this.page++;
        this.atualizaResultados();
      }
    }

  atualizaResultados() {
      if (this.searchText) {
        this.http
          .get(`${this.apiURL}/cards?q=name:${this.searchText}`)
          .subscribe((resultado: any) => {
            this.cardListFind = resultado.data.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
            this.searchResultsAvailable = this.cardListFind.length > 0;
          });
      } else {
        this.fetchCardList();
        this.searchResultsAvailable = false;
      }
    }

  filtrarPorTipo() {
    if (this.selectedType) {
      this.http
        .get(`${this.apiURL}/cards?q=types:${this.selectedType}`)
        .subscribe((resultado: any) => {
          this.cardListFind = resultado.data.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
          this.searchResultsAvailable = this.cardListFind.length > 0;
        });
    } else {

        this.fetchCardList();
        this.searchResultsAvailable = false;
    }
    }
    selecionarTipo() {

      console.log('Tipo selecionado:', this.selectedType);
      this.filtrarPorTipo()
    }

}
