import { Injectable } from '@angular/core';
import { CardItem } from '../model/card-item';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private localStorageKey = 'cardItems';

  constructor() { }

  save(card: CardItem): void {
    console.log(card);
    const storedItems = localStorage.getItem(this.localStorageKey);
    let cards :CardItem[] = JSON.parse(storedItems!);
    if(cards == null){
      cards = [];
    }
    cards.push(card);
    localStorage.setItem(this.localStorageKey, JSON.stringify(cards));
    console.log(cards);
  }

  getAll(): CardItem[] {
    const storedItems = localStorage.getItem(this.localStorageKey);
    return storedItems ? JSON.parse(storedItems) : [];
  }

  remove(i : number): void {
    const storedItems = localStorage.getItem(this.localStorageKey);
    let cardItems :CardItem[] = JSON.parse(storedItems!);
    if (i != -1) {
      cardItems.splice(i, 1);
      console.log(cardItems)
      localStorage.setItem(this.localStorageKey, JSON.stringify(cardItems));
      // console.log(cardItems);
      }
  }

  reset() : void {
    localStorage.removeItem(this.localStorageKey);
  }


}
