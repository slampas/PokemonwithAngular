import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';


@Component({
    selector: 'list-pokemon',
    templateUrl: './list-pokemon.component.html',

})
export class ListPokemonComponent implements OnInit {

    pokemons: Pokemon[] = [];

    constructor(private router: Router, private pokemonsService: PokemonsService) { }

    ngOnInit(): void {
        this.pokemons = this.pokemonsService.getPokemons();
    }

    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

}
