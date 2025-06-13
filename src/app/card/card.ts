import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  course:string = 'Angular desde Cero';

  cardData = {
    imageUrl:'https://via.placeholder.com/150',
    title:'Card Title',
    description: 'Card Description',
  }

  onTitleChange(event:any):void {
    this.cardData.title = event.target.value;
  }

  changeTitle():void {
    this.cardData.title = "Nuevo titulo";
  }
}
