import { Component } from '@angular/core';

@Component({
  selector: 'panino',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basics';
  doggo = 'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0';
  imageFullURL = '';
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
