import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  counter: string = '0';
  changeTypeCounter = +this.counter

  @Input('itemTitleInChild') x:string
  @Input() myArray:[]

  @Output() eventNameFromChild = new EventEmitter();

  @Input() inputOne: string = '';
  @Output() inputTwo = new EventEmitter();
  
  

  constructor() { }

  setTitle(title: string) {
    console.log(`im in child and title is ${title}`)
  }
  pushEvent() {
    this.changeTypeCounter += 1;
    console.log('---', this.changeTypeCounter)
    this.eventNameFromChild.emit(this.changeTypeCounter)
  }

  ngOnInit(): void {
    console.log(this.myArray)
  }

}
