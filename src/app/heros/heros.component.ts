import { Component, OnInit } from '@angular/core';
import Hero from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }
}
