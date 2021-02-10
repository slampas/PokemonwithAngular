import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemons';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'la variable Title : PokemonAngular';
  public pokemons: Pokemon[] | undefined;
  public value: String = '';
  values: String='';
  age=10;



  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }



  selectPokemon(pokemon: Pokemon) {
    alert("Vous avez cliqué sur: " + pokemon.name);
  }


}
