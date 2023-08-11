import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'panini',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input('bubba') postImg = ''; 
  @Output() imgSelected = new EventEmitter<string>();
}

//se non smettevo nulla dentro al posto di bubba nel componente padre avrei dovuto usare 'postImg' nel foglio html