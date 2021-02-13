import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[] = [];
  pokemon: Pokemon = new Pokemon();
  pokemonsService: PokemonsService = new PokemonsService();

  constructor(private route: ActivatedRoute, private router: Router, pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.pokemon = this.pokemonsService.getPokemon(id);

  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

}
