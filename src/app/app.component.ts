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
  private pokemons: Pokemon[] | undefined;
  public value: String = "";

  public getValue() {
    return this.value;
  }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }



  selectPokemon(pokemon: Pokemon) {
    alert("Vous avez cliqué sur: " + pokemon.name);
  }

  onClick() {
    console.log("clic numéro");
  }

  onKey(event: any) {
   this.value = "Bonjour Monsieur: " +event.target.value;

  }

}
