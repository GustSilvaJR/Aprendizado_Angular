import { Component, OnInit } from '@angular/core';

//Services
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {

    this.pokeApiService.getAllPokemons().subscribe({
      next: (res) => {
        res.results.forEach((pokemon:any) => { 
          this.pokeApiService.getStatusPokemon(pokemon.url).subscribe({
            next: (res) =>{
              pokemon.status = res;
              console.log(pokemon);
            },
            error: (err) => err
          });
        });
      },
      error: (err) => console.log(err)
    })
  }

}
