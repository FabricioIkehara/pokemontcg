import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [HttpClientModule, DetailComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

   cardShow? : string;
   cardDetail? : any;
   apiURL : string = 'https://api.pokemontcg.io/v2';
   cardId?: string | null;


   constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

   ngOnInit(): void {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (cardId) {
      this.fetchCardDetails(cardId);
    } else {
      console.error('ID da carta não encontrado na rota.');
    }
  }

  private fetchCardDetails(cardId: string) {
    this.http.get(`${this.apiURL}/cards/${cardId}`)
      .subscribe(
        (response: any) => {
          this.cardShow = response.data.images.large;
          this.cardDetail = response.data;
        },
        (error) => {
          console.error('Erro ao obter detalhes da carta:', error);
        }
      );
  }

  voltar() {
     this.router.navigate(['/card-list']);
  }
}

