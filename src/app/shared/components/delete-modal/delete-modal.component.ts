import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

@Input() deleteModel: any;

  constructor() { }

  ngOnInit(): void {
  }

}
