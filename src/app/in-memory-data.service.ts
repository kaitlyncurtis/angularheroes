import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', hometown: 'Pleasanton', powers: ['Kindness', 'Empathy'] },
      { id: 12, name: 'Narco', hometown: 'Medellin', powers: ['Strength', 'Cunning'] },
      { id: 13, name: 'Bombasto', hometown: 'Belarus', powers: ['Explosions', 'Power'] },
      { id: 14, name: 'Celeritas', hometown: 'Athens', powers: ['Supernova', 'Hardiness'] },
      { id: 15, name: 'Magneta', hometown: 'Berlin', powers: ['Magnetism', 'Strength'] },
      { id: 16, name: 'RubberMan', hometown: 'Montreal', powers: ['Stretchiness', 'Resilience'] },
      { id: 17, name: 'Dynama', hometown: 'Houston', powers: ['Speed', 'Momentum'] },
      { id: 18, name: 'Dr IQ', hometown: 'Big Brain City', powers: ['Intellect', 'Cunning'] },
      { id: 19, name: 'Magma', hometown: 'Honolulu', powers: ['Fire', 'Light'] },
      { id: 20, name: 'Tornado', hometown: 'Oklahoma City', powers: ['Entropy', 'Speed'] }
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