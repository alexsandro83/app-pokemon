import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokapiService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number = 20, offset: number = 0): Observable<any> {
    const url = `${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get(url);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }
  getPokemonDetailsByName(name: string): Observable<any> {
    const url = `${this.apiUrl}/pokemon/${name}`;
    return this.http.get(url);
  }
}