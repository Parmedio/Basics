import { Component } from '@angular/core';

@Component({
  selector: 'panino',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics knowledge';
  doggo = 'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0';
  squirtle = 'https://pngimg.com/uploads/pokemon/pokemon_PNG7.png';
  images = [
    this.squirtle,
    this.squirtle,
    this.squirtle
  ]
  imageFullURL = '';
  currentDate = new Date();
  cost = 5000;
  temperature = 23.7;

  blueClass: boolean = false;
  fontSize: number = 16;
  
  toggleBlueClass(){
    this.blueClass = !this.blueClass;
    console.log('hai cliccato per cambiare colore (applicare una classe di stile ad un elemento HTML)!')
  }

  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }

  getName = () => {
    return "Crema solare";
  }

  changeImage = (e: KeyboardEvent) => {
    this.doggo = (e.target as HTMLInputElement).value
  }

  logImg = (e: string) => {
    this.imageFullURL = e;
  }
}
