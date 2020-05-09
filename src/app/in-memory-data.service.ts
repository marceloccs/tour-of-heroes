import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero [] = [
      {id : 1, name : 'Nero Son of Sparta' , svgIcon : 'face'},
      {id : 2, name : 'Dante Son of Sparta', svgIcon : 'weekend'},
      {id : 3, name : 'HellBoy', svgIcon : 'whatshot'},
      {id : 4, name : 'Corvo terror of kurkwall', svgIcon : 'location_city'},
      {id : 5, name : 'Cloud Strife', svgIcon : 'games'},
      {id : 6, name : 'Scorpion', svgIcon : 'bug_report'},
      {id : 7, name : 'Solid Snake', svgIcon : 'drafts'},
      {id : 8, name : 'Luke Skywalker', svgIcon : 'thumb_up_alt'},
      {id : 9, name : 'Hollow Knight', svgIcon : 'bug_report'},
      {id : 10, name : 'Marcus Phenix', svgIcon : 'videogame_asset'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
