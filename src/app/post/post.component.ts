import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'panini',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('bubba') postImg = ''; 
  @Input() costoso: number = 0;
  @Output() imgSelected = new EventEmitter<string>();
  
  
  constructor () {
    console.log("-------- PostComponent called constructor()", this.postImg);
  }
  ngOnDestroy() {
    console.log("-------- PostComponent called ngOnDestroy()");
  }

  ngAfterContentInit() {
    console.log("-------- PostComponent called ngAfterContentInit()");
  }

  ngAfterContentChecked() {
    console.log("-------- PostComponent called ngAfterContentChecked()");
  }

  ngAfterViewInit() {
    console.log("-------- PostComponent called ngAfterViewInit()");
  }

  ngAfterViewChecked() {
    console.log("-------- PostComponent called ngAfterViewChecked()");
  }

  ngOnInit() {
    console.log("-------- PostComponent called ngOnInit()", this.postImg);
  }

  ngOnChanges() {
    console.log("-------- PostComponent called ngOnChanges()");
  }

  ngDoCheck() {
    console.log("-------- PostComponent called ngDoCheck()");
  }
}

//se non smettevo nulla dentro al posto di bubba nel componente padre avrei dovuto usare 'postImg' nel foglio html