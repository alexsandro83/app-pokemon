import { Component, OnInit } from '@angular/core';
import { PokapiService } from '../pokapi.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  errorMessage: string = '';

  constructor(private pokapiService: PokapiService) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokapiService.getPokemonList().subscribe({
      next: (data: any) => {
        this.pokemonList = data.results;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar a lista de Pokémon.';
        console.error('Erro:', error);
      }
    });
  }
}