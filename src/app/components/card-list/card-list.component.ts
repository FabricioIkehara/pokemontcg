
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [ HttpClientModule, CommonModule, FormsModule, RouterModule],
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

   card: any;


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
        .get(`${this.apiURL}/cards?name=${this.searchText}`)
        .subscribe((resultado: any) => {
          this.cardListFind = resultado.data;
        });
    } else {
      this.fetchCardList();
    }
  }

  private fetchCardList() {
    this.http
      .get(`${this.apiURL}/cards?page=${this.page}&pageSize=${this.pageSize}`)
      .subscribe((resultado: any) => {
        this.cardList = resultado.data;
      });
  }

}
