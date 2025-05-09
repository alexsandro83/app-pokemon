import { Component, OnInit } from '@angular/core';
import { PokapiService } from '../pokapi.service';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true, // Certifique-se que standalone está como true
  imports: [NgIf, NgFor, TitleCasePipe, FormsModule], // Importe NgIf, NgFor e TitleCasePipe aqui
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  pokemonDetails: any;
  errorMessage: string = '';
  searchTerm: string = '';
  loading: boolean = false;

  constructor(private pokapiService: PokapiService) { }

  ngOnInit(): void {
    this.loadInitialPokemonList();
  }

  loadInitialPokemonList() {
    this.loading = true;
    this.pokapiService.getPokemonList().subscribe({
      next: (data: any) => {
        this.pokemonList = data.results;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregar a lista de Pokémon.';
        console.error('Erro:', error);
        this.loading = false;
      }
    });
  }

  searchPokemon() {
    if (this.searchTerm.trim() !== '') {
      this.loading = true;
      this.pokemonDetails = null; // Limpa os detalhes anteriores
      this.pokapiService.getPokemonDetailsByName(this.searchTerm.toLowerCase()).subscribe({
        next: (data: any) => {
          this.pokemonDetails = data;
          this.errorMessage = '';
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = `Pokémon "${this.searchTerm}" não encontrado.`;
          this.pokemonDetails = null;
          console.error('Erro:', error);
          this.loading = false;
        }
      });
    } else {
      this.pokemonDetails = null;
      this.errorMessage = '';
      this.loadInitialPokemonList(); // Se o campo de busca estiver vazio, volta a lista inicial
    }
  }
}