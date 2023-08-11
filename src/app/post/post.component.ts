import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'panini',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() postImg = '';
  imgSelected = new EventEmitter<string>();
}
