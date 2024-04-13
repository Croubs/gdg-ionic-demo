import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


export interface Personajes {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Personaje[];
}

export interface Personaje {
  id: number;
  name: string;
  species: string;
  image: string;
  status: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})

export class PersonajesService {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://rickandmortyapi.com/api/character';

  constructor() { }

  cargar(pagina:number = 1) {
    return this.http.get<Personajes>(this.url+'?page='+pagina)
    .pipe(
      map(personajes => personajes.results)
    );
  }
}
